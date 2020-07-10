---
layout: post
title: 'Azure Fundamentals'
date: 2020-07-09 12:32:45 +0800
categories:
---

# Security, responsibility, and trust in Azure

<br />

1. Cloud security is a shared responsibility between you and your cloud provider. Which category of cloud services requires the greatest security effort on your part?

   -[x] Infrastructure as a service (IaaS)

   -[ ] Platform as a service (PaaS)

   -[ ] Software as a service (SaaS)
   <br />

2. Which of these options helps you most easily disable an account when an employee leaves your company?

   -[ ] Enforce multi-factor authentication (MFA)

   -[ ] Monitor sign-on attempts

   -[x] Use single sign-on (SSO)
   <br />

3. Which of these approaches is the strongest way to protect sensitive customer data?

   -[ ] Encrypt data as it sits in your database

   -[ ] Encrypt data as it travels over the network

   -[x] Encrypt data both as it sits in your database and as it travels over the network
   <br />

4. There has been an attack on your public-facing website, and the application's resources have been overwhelmed and exhausted, and are now unavailable to users. What service should you use to prevent this type of attack? 
   
   -[x] DDoS protection

   -[ ] Azure Firewall

   -[ ] Network Security Group

   -[ ] Application Gateway
   <br />

5. You want to store certificates in Azure to centrally manage them for your services. Which Azure service should you use? 
   
   -[ ] AIP

   -[ ] Azure AD

   -[x] Azure Key Vault

   -[ ] Azure ATP

     <br />

# Apply and monitor infrastructure standards with Azure Policy

<br />

1. True or false: You can download published audit reports and other compliance-related information related to Microsoft’s cloud service from the Service Trust Portal

   -[x] True

   -[ ] False
   <br />

2. Which Azure service allows you to configure fine-grained access management for Azure resources, enabling you to grant users only the rights they need to perform their jobs?

   -[ ] Locks

   -[ ] Policy

   -[ ] Initiatives

   -[x] Role-based Access Control
   <br />

3. Which Azure service allows you to create, assign, and, manage policies to enforce different rules and effects over your resources and stay compliant with your corporate standards and service-level agreements (SLAs)?

   -[ ] Azure Policy

   -[ ] Azure Blueprints

   -[ ] Azure Security Center

   -[x] Role-based Access Control
   <br />

4. Which of the following services provides up-to-date status information about the health of Azure services?

   -[ ] Compliance Manager

   -[ ] Azure Monitor

   -[ ] Service Trust Portal

   -[x] Azure Service Health
   <br />

5. Where can you obtain details about the personal data Microsoft processes, how Microsoft processes it, and for what purposes?

   -[x] Microsoft Privacy Statement

   -[ ] Compliance Manager

   -[ ] Azure Service Health

   -[ ] Trust Center

   <br />

# Control and organize Azure resources with Azure Resource Manager

<br />

1.  Tags can be applied to any type of resource on Azure

    -[ ] True

    -[x] False
    <br />

2.  Tags can be applied to any type of resource on Azure

    -[ ] True

    -[x] False
    <br />

3.  Which of the following features does not apply to resource groups?

    -[ ] Resources can be in only one resource group.

    -[ ] Resources can be moved from one resource group to another resource group.

    -[x] Resource groups can be nested.

    -[ ] Role-based access control can be applied to the resource group.

    <br />

4.  Which of the following approaches might be a good usage of tags?

    -[ ] Using tags to associate a cost center with resources for internal chargeback

    -[ ] Using tags in conjunction with Azure Automation to schedule maintenance windows

    -[ ] Using tags to store environment and department association

    -[x] All of the above are good ways to use tags

    <br />

5.  Which of the following approaches would be the most efficient way to ensure a naming convention was followed across your subscription?

    -[ ] Send out an email with the details of your naming conventions and hope it is followed

    -[x] Create a policy with your naming requirements and assign it to the scope of your subscription, Give all other users except for yourself read-only access to the subscription.

    -[ ] Have all requests to create resources sent to you so you can review the names being assigned to resources, and then create them.

    <br />

6.  Which of the following items would be good use of a resource lock?

    -[x] An ExpressRoute circuit with connectivity back to your on-premises network

    -[ ] A non-production virtual machine used to test occasional application builds

    -[ ] A storage account used to temporarily store images processed in a development environment

    <br />

# Predict costs and optimize spending for Azure

<br />

1.  Which tab of the Azure pricing calculator will you use to put together your estimate?

    -[ ]Estimate

    -[x]Products

    <br />

2.  True or false: You can share your estimate through an Excel spreadsheet or through a URL.

    -[x] True

    -[ ] False

    <br />

3.  Azure Advisor provides recommendations for _____.

    -[ ] Costs only

    -[x] High availability, security, performance, operational excellence, and cost

    -[ ] High availability, performance, and cost
    <br />

4.  Azure Cost Management allows you to _____.

    -[x] See historical breakdowns of what services you are spending your money on.

    -[ ] See estimates of what your services might cost if you make a change.

    <br />

5.  Which one of these approaches is not a cost-saving solution?

    -[ ] Deallocate virtual machines during off hours.

    -[ ] Use Azure Reserved Virtual Machine Instances.

    -[x] Load balance your virtual machines for incoming messages.

    -[ ] Right-size underutilized virtual machines.

    <br />

6.  True or false: PaaS is typically less expensive than IaaS.

    -[x] True

    -[ ] False
