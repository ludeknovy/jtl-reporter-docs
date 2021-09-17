---
title: Installing JTL Reporter on Azure container instances 
---

### Prerequisites
* Azure Account 
* Latest version of [PSQLODBC](https://www.postgresql.org/ftp/odbc/versions/msi/) to run PSQL commands.

### Preparation

#### Create Azure Resources 
you need to create the following azure resources before u begin:
* Azure Resource group.
* Azure storage account with 2 file shares (for mongo and Postgres databases).
* Azure storage account access key.

#### Installation steps: 
1. Create Azure resource group 
2. Create azure storage account with 2 file shares.
3. Get the storage account access key.
4. Clone the [git repo](https://github.com/ludeknovy/jtl-reporter) and the azure scripts can be found under 'Azure-Deployment' folder.
5. Download and install the latest version of [PSQLODBC](https://www.postgresql.org/ftp/odbc/versions/msi/) to run PSQL commands.
6. Open DeployJTLReport.ps1 script using PowerShell  ISE or any other editors and edit the following variables based on your environment.
    ```powershell
        $ResourceGroup = "<ResourceGroup Name>"
        $Storageaccountname = "<Storage account name>"
        $storageKey = "<Storage key>"
        $mongodbshareName = "<MongoDB File share name >"
        $postgresdbFileshare = "<PostgresDB File share name >"
    ```
        
7. Connect to Azure using PowerShell and run DeployJTLReport.ps1
8. After script execution you can see 3 container instances in your Azure resource group (JtlReporter, postgres and Migration).
9. Post success you can delete the Migration container. 
9. You can access JTL Reporter using the IP of JtlReporter container instance.
    ```IP
        http://<JtlReporter-ContainerIP>:80
    ```
