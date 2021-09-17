---
title: Installing JTL Reporter on Azure container instances 
---

### Prerequisites
* Azure Account 
* Latest version of [PSQLODBC](https://www.postgresql.org/ftp/odbc/versions/msi/) to run psql commands.

### Preparation

#### Create Azure Resources 
you need to create the following azure resources before u begin:
* Azure Resorce group.
* Azure storage account with 2 file shares (for mongo and Postgres databases).
* Azure storage account access key.

#### Instalation steps: 
1. Create Azure resource group 
2. Create azure storage account with 2 file shares.
3. Get the storage account access key.
4. clone the [git repo](https://github.com/esahanhunter/AzureJTLReporter).
5. download and install the latest version of [PSQLODBC](https://www.postgresql.org/ftp/odbc/versions/msi/) to run psql commands.
6. Open DeployJTLReport.ps1 script using powershell ISE or any other editors and edit the following variables based on your environment.
    >   $ResourceGroup = "<ResourceGroup Name>"
        $Storageaccountname = "<Storage account name>"
        $storageKey = "<Storage key>"
        $mongodbshareName = "<MongoDB Fileshare name >"
        $postgresdbFileshare = "<postgresDB Fileshare name >"
7. Connect to Azure using powershell and run DeployJTLReport.ps1
8. Post success you can delete the Migration container. 
9. You can access JWT report  using the IP of jtlreportr
    > http://<ContainerIP>:80
