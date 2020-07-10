---
layout: post
title: 'Azure Fundamentals'
categories:
---

# Cloud Concepts - Principles of cloud computing

<br >

1. Which term from the list below would be viewed as benefits of using cloud services?

   -[ ] Unpredictable costs

   -[x] Elasticity

   -[ ] Local reach only
   <br />

2. Suppose you have two types of applications: legacy applications that require specialized mainframe hardware and newer applications that can run on commodity hardware. Which cloud deployment model would be best for you?

   -[ ] Public cloud

   -[ ] Private cloud

   -[x] Hybrid cloud

   <br />

3. You're developing an application and want to focus on building, testing, and deploying. You don't want to worry about managing the underlying hardware or software. Which cloud service type is best for you?

   -[ ] Infrastructure as a Service (IaaS)

   -[x] Platform as a Service (PaaS)

   -[ ] Software as a Service (SaaS)

   <br/>

# Create an Azure account

<br />

1.  Which of the following statements is true about an Azure subscription?

    -[ ] Using Azure does not require a subscription

    -[x] An Azure subscription is a logical unit of Azure services

    -[ ] You can't have more than one subscription
    <br />

2.  Your billing is based on your usage of Azure resources and is invoiced **\_**

    -[ ] Annually

    -[x] Monthly

    -[ ] Daily
    <br />

3.  When you create an Azure resource like a virtual machine, you select the **\*\***\_\_**\*\*** it belongs to.

    -[ ] Billing account

    -[ ] Billing profile

    -[x] Azure subscription

    <br/>

4.  Which Azure support plan is best for business-critical workloads?

    -[ ] Azure Developer

    -[x] Azure Professional Direct

    -[ ] Azure Standard

    <br/>

# Core Cloud Services - Introduction to Azure

<br />
1. What is Azure?
    
    -[x] Microsoft's cloud computing platform, which provides compute power, storage, and services over the Internet using a pay-as-you-go pricing model.

    -[ ] A single data center located in Redmond, Washington.

    -[ ] A hosting environment specifically for virtual machines

<br/>

2.  Which of the following is an example of an Azure application platform?

    -[x] Azure App Service

    -[ ] Azure Load Balancer

    -[ ] Azure Table Storage

    -[ ] Azure Cache for Redis

    <br />

3.  When should you scale out your deployment?

    -[ ] When your application or service requires a more powerful CPU or more memory to run faster.

    -[x] When you need additional virtual machines to speed up your application.

    -[ ] When you're using excess capacity that you don't need.

    <br />

# Core Cloud Services - Azure architecture and service gurantees

<br />
1. Deploying an app can be done directly to what level of physical granularity?

    -[x] Region

    -[ ] Datacenter

    -[ ] Server rack

<br />

2.  To use Azure datacenters that are made available with power, cooling, and networking capabilities independent from othere datacenters in a region, choose a region that supports**\_\_**?

    -[ ] Geography distribution

    -[ ] Service-Level Agreements(SLAs)

    -[x] Availability Zones
    <br />

3.  Application availability refers to what?

    -[ ] The service level agreement of the associated resource.

    -[ ] Application support for an availability zone.

    -[ ] The overall time that a system is functional and working.

    <br />

# Core Cloud Services - Manage services with the Azure portal

<br />
1. An Azure dashboard is stored as whicht type of file?

    -[ ] XML

    -[x] JSON

    -[ ] PNG

<br />

2. Azure Advisor provides advice on which of these topics?

   -[ ] Creating an Azure Account

   -[x] Best practices and security for your services

   -[ ] Using the Azure portal effectively
   <br />

3. True or false: Azure Cloud Shell is an interactive, browser-accessible shell for managing Azure resources?

   -[x] True

   -[ ] False
   <br />

# Core Cloud Services - Azure compute options

<br />
1. Suppose you have an existing application running locally on your own server. You need additional capacity but prefer to move to Azure instead of buying upgraded on-premises hardware. Which compute option would likely give you the quickest route to getting your application running in Azure?

    -[ ] Serverless computing

    -[ ] Containers

    -[x] Virtual machines

<br />

2.  Imagine that you work on a photo-sharing application that runs on millions of mobile devices. Demand is unpredictable because you see a spike in usage whenever a locally or nationally significant event occurs. Which Azure compute resource is the best match for this workload?

    -[x] Serverless computing

    -[ ] Containers

    -[ ] Virtual machines

<br />

3.  The compute options give you different levels of control over the configuration of the environment in which your application runs. Which of the following lists the compute options in order of your control from "most control" to "least control"?

    -[ ] Serverless computing, containers, virtual machines

    -[ ] Containers, serverless computing, virtual machines

    -[x] Virtual machines, containers, serverless computing

    <br />

# Core Cloud Services - Azure data storage options

<br />

1. Suppose you work at a startup with limited funding. Why might you prefer Azure data storage over an on-premises solution?

   -[x] To ensure you run on a specific brand of hardware, which will let you form a marketing partnership with that hardware vendor.

   -[ ] The Azure pay-as-you-go billing model lets you avoid buying expensive hardware.

   -[ ] To get exact control over the location of your data store.
   <br />

2. Which of the following situations would yield the most benefits from relocating an on-premises data store to Azure?

   -[x] Unpredictable storage demand that increases and decreases multiple times throughout the year.

   -[ ] Long-term, steady growth in storage demand.

   -[ ] Consistent, unchanging storage demand.
   <br />

3. A newly released mobile app using Azure data storage has just been mentioned by a celebrity on social media, seeing a huge spike in user volume. To meet the unexpected new user demand, what feature of pay-as-you-go storage will be most beneficial?

   -[x] The ability to provision and deploy new infrastructure quickly

   -[ ] The ability to predict the service costs in advance

   -[ ] The ability to meet compliance requirements for data storage
   <br />

# Core Cloud Services - Azure networking options

<br />
1. What is an Azure region?
    
   -[x] One or more Azure data centers within a specific geographical location.
    
   -[ ] A way of breaking networks into smaller networks.
    
   -[ ] Firewall rules which define the flow of traffic in and out of Azure.
   <br />

2. Which of the following is true about virtual networks?

   -[x] You configure virtual networks through software.

   -[ ] A virtual network accepts network traffic on all ports. You configure the firewall through virtual machines.

   -[ ] Virtual networks are always reachable from the internet.
   <br />

3. Which is true about Azure Load Balancer?

   -[ ] You must use Azure Load Balancer if you want to distribute traffic among your virtual machines running in Azure.

   -[ ] Azure Load Balancer works with internet-facing traffic only.

   -[x] Azure Load Balancer distributes traffic among similar systems, making your services more highly available.
   <br />

4. What is network latency?

   -[ ] The amount of data that can fit on the connection.

   -[ ] The distance data must travel to reach its destination.

   -[x] The time it takes for data to travel over the network.
   <br />

5. How does Azure Traffic Manager reduce latency?

   -[ ] It chooses only the fastest networks between endpoints.

   -[x] It uses the DNS server that's closest to the user.

   -[ ] It caches content, similar to how content delivery networks work.
   <br />

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

3.  Azure Advisor provides recommendations for **\_**.

    -[ ] Costs only

    -[x] High availability, security, performance, operational excellence, and cost

    -[ ] High availability, performance, and cost
    <br />

4.  Azure Cost Management allows you to **\_**.

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
