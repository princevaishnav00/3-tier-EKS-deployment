🚀 3-Tier DevOps Project on AWS EKS (CI/CD with Jenkins & Argo CD)
 
 
 📌 Project Overview :
 This project demonstrates a production-like end-to-end DevOps pipeline using a 3-tier architecture deployed on AWS EKS (Kubernetes).
 
🧩 Application Components :
   • Frontend (React)
   • Backend (Node.js API)
   • Database (MongoDB)

The project implements CI/CD using Jenkins and Argo CD (GitOps model) along with monitoring using Prometheus and Grafana.



🏗️ Architecture

User → AWS Load Balancer (Ingress)
     → Frontend (React)
     → Backend (Node.js API)
     → MongoDB (Database)
     
🔄 CI/CD Flow 

GitHub → Jenkins (CI)
        → Docker Build & Push (ECR)
        → Update Kubernetes Manifests Repo
        → Argo CD (CD - GitOps)
        → EKS Deployment


🛠️ Tech Stack :

|  Category      | Tools Used          |
| -------------- | ------------------- |
|  Cloud         | AWS (EKS, ECR, ELB) |
|  Container     | Docker              |
|  Orchestration | Kubernetes          |
|  CI/CD         | Jenkins, Argo CD    |
|  Monitoring    | Prometheus, Grafana |
|  Frontend      | React               |
|  Backend       | Node.js             |
|  Database      | MongoDB             |



⚙️ CI/CD Pipeline :

🔹Continuous Integration (Jenkins)
  • Clone source code from GitHub
  • Build Docker images (Frontend & Backend)
  • Push images to AWS ECR
  • Update Kubernetes manifest files (image tag)

🔹Continuous Deployment (Argo CD)
  • Monitors Git repository for changes
  • Automatically syncs manifests
  • Deploys latest version to EKS cluster


☸️ Kubernetes Components :

• Deployments :
  → Frontend Deployment
  → Backend Deployment
  → MongoDB Deployment

• Services:
  → Internal communication between services

• Ingress / Load Balancer
  → Exposes application externally

• Secrets
  → Secure MongoDB credentials


 📊 Monitoring

• Prometheus
  → Collects metrics from Kubernetes cluster

• Grafana
  → Visualizes CPU, memory, and pod metrics


🔐 Security
• Sensitive data (MongoDB credentials) stored using Kubernetes Secrets

 
 
  🚀 Features :

 ✅ 3-tier architecture (Frontend, Backend, Database)
 ✅ Dockerized microservices
 ✅ CI/CD pipeline with Jenkins
 ✅ GitOps deployment using Argo CD
 ✅ Kubernetes (EKS) deployment
 ✅ Monitoring with Prometheus & Grafana
 ✅ AWS Load Balancer (Ingress)


 ⭐ Conclusion :

This project demonstrates real-world DevOps practices including:

• CI/CD automation
• GitOps deployment
• Kubernetes orchestration
• Monitoring and observability


