import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OTYwMWRlNy05MDkzLTRhMDYtYmFhMS1hOGI4MzljMTBmN2QiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiODhlOTQ3ZWQtMTgzNi00ZTcxLTllODctMzhiN2FiYjU4YTg2IiwiaWF0IjoxNzgzODY4MTUwfQ.g_3Bkxk0ojKA6_K8LXlN6j-2gxe-5jT08PjY_NZlJNk"
headers = {
    "X-N8N-API-KEY": api_key,
    "Content-Type": "application/json"
}

def post_json(url, data):
    req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers=headers, method='POST')
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            return json.loads(response.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        print(f"HTTP Error {e.code}: {e.reason}")
        print(e.read().decode('utf-8'))
        return None
    except Exception as e:
        print(f"Error: {e}")
        return None

# n8n Webhook to Email Notification Workflow
sarexp_leads_wf = {
  "name": "SAREXP - B2B Leads",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "sarexp-b2b-leads",
        "options": {}
      },
      "name": "Webhook Lead",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [100, 200]
    },
    {
      "parameters": {
        "fromEmail": "avisos@shipairglobal.com",
        "toEmail": "commercial@sarexp.com",
        "subject": "=Nuevo Lead B2B: {{ $json.body.company }} ({{ $json.body.country }})",
        "html": "=<h3>¡Nuevo Prospecto de Alianza B2B Recibido!</h3><p>Se ha registrado una consulta de alianza comercial desde la Landing Page de SAREXP.</p><p><b>Detalles del Lead:</b><br>- Nombre: {{ $json.body.name }}<br>- Empresa: {{ $json.body.company }}<br>- Correo: {{ $json.body.email }}<br>- Teléfono: {{ $json.body.phone }}<br>- País de Destino: {{ $json.body.country }}<br>- Volumen Estimado: {{ $json.body.volume }} kg/mes</p><br><p>Sistema de Captación SAREXP USA</p>"
      },
      "name": "Send Mail to Commercial",
      "type": "n8n-nodes-base.emailSend",
      "typeVersion": 1,
      "position": [350, 200]
    }
  ],
  "connections": {
    "Webhook Lead": {
      "main": [
        [
          {
            "node": "Send Mail to Commercial",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "settings": {}
}

def put_json(url, data):
    req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers=headers, method='PUT')
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            return json.loads(response.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        print(f"HTTP Error {e.code}: {e.reason}")
        print(e.read().decode('utf-8'))
        return None
    except Exception as e:
        print(f"Error: {e}")
        return None

print("Deploying SAREXP B2B Leads workflow to n8n VPS...")
res = post_json("https://auto.macgowanmaigan.site/api/v1/workflows", sarexp_leads_wf)
if res:
    workflow_id = res.get('id')
    print(f"\nCreated workflow 'SAREXP - B2B Leads' with ID: {workflow_id}")
    
    # Activate the workflow
    print("Activating workflow...")
    act_res = post_json(f"https://auto.macgowanmaigan.site/api/v1/workflows/{workflow_id}/activate", {})
    if act_res:
        print(f"SUCCESS! Deployed and activated workflow.")
        print(f"Production Webhook URL: https://auto.macgowanmaigan.site/webhook/sarexp-b2b-leads")
    else:
        # Fallback to manual activation info
        print("Workflow created but activation failed via API. You can activate it manually in n8n dashboard.")
        print(f"Production Webhook URL: https://auto.macgowanmaigan.site/webhook/sarexp-b2b-leads")
else:
    print("\nFAILED: Could not deploy workflow to n8n.")
