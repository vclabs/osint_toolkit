![ost_logo](https://github.com/vclabs/osint_toolkit/blob/a78238fb4b8447deb9c93726a112e6718588d982/frontend/src/images/osint_light.png)

# OSINT Toolkit
> **Warning**
> OSINT Toolkit is not production ready yet. This is an early prototype, that still needs some work to be done. 
## A fullstack web application built for security analysts



OSINT Toolkit is a full-stack web application designed to assist security analysts in their work. It combines various functions and services into a single tool, making it easier for analysts to identify potential threats and stay updated with the latest developments in the field of cybersecurity.


* [Features](#features)
  * [Newsfeed](#features)
  * [Email Analyzer](#features)
  * [IOC Analyzer](#ioc-analyzer)
  * [IOC Extractor](#ioc-extractor)
  * [Domain Monitoring](#domain-monitoring)
  * [AI Assistant](#ai-assistant)
  * [CVSS Calculator](#cvss-calculator)
  * [Customizability](#customizable)
* [Planned features](#planned-features-for-later-versions)
* [Deploy with Docker](#deploy-with-docker)
* [Deploy from source](#deploy-from-source)

## Features
### Newsfeed
The Newsfeed module keeps you informed about the latest cybersecurity news by aggregating articles from trusted sources such as Wired, The Hacker News, Security Magazine, Threatpost, TechCrunch Security, and Dark Reading. Stay up-to-date with industry trends and potential threats without having to visit multiple websites or subscribe to numerous newsletters.

![227624764-ebfc69b5-8a02-4967-af19-2c1196732ffa](https://github.com/vclabs/osint_toolkit/blob/4cfba337eab606fca09cd800748756ac94356a0e/frontend/src/images/News.png)

### IOC Analyzer
The IOC Analyzer module helps you analyze different types of indicators of compromise (IOCs) such as IP addresses, hashes, email addresses, domains, and URLs. It leverages services like VirusTotal, AlienVault, AbuseIPDB, and social media platforms like Reddit and Twitter to gather information about the IOCs. The module automatically detects the type of IOC being analyzed and utilizes the appropriate services to provide relevant information, enabling you to identify potential threats and take necessary actions to protect your organization.
![ioca](https://github.com/vclabs/osint_toolkit/blob/4cfba337eab606fca09cd800748756ac94356a0e/frontend/src/images/IOC.png)

### Email Analyzer
The Email Analyzer module allows you to analyze .eml files for potential threats. Simply drag and drop an .eml file into the module, and it will parse the file, perform basic security checks, extract indicators of compromise (IOCs), and analyze messages with the help of AI. Analyze the IOCs using various open-source intelligence (OSINT) services, and enhance your organization's email security.
![ema](https://github.com/vclabs/osint_toolkit/blob/4cfba337eab606fca09cd800748756ac94356a0e/frontend/src/images/Email.png)

### IOC Extractor
The IOC Extractor module allows you to extract and organize IOCs from unstructured files using regular expressions (Regex). It automatically removes duplicates, saving you the effort of sorting through the same IOCs multiple times. Simply drop your file containing the IOCs into the tool, and analyze each detected IOC with a single click.
![ioce](https://github.com/vclabs/osint_toolkit/blob/4cfba337eab606fca09cd800748756ac94356a0e/frontend/src/images/IOC%20extracter.png)

### Domain monitoring
The Domain Monitoring module helps you protect your organization from phishing attacks by searching for recently registered domains that match specific patterns. By utilizing the URLScan.io API, you can view screenshots of websites associated with domains without visiting them directly. Additionally, you can check each domain and its resolved IP against multiple threat intelligence services, further enhancing your organization's security.
![dm](https://github.com/vclabs/osint_toolkit/blob/4cfba337eab606fca09cd800748756ac94356a0e/frontend/src/images/domain.png)

### AI Assistant
The AI Assistant module provides powerful AI-based solutions for log data analysis, email text analysis, and source code explanation. Leveraging advanced AI algorithms from OpenAI, it helps security experts respond quickly and effectively to potential security threats, protecting their networks and maintaining system integrity.
<img width="1227" alt="aia" src="https://github.com/vclabs/osint_toolkit/blob/4cfba337eab606fca09cd800748756ac94356a0e/frontend/src/images/AI.png">

### CVSS Calculator
The CVSS Calculator module allows you to calculate the CVSS 3.1 score of a vulnerability and export the calculation as a markdown or JSON file.
![cvss_calc](https://github.com/vclabs/osint_toolkit/blob/4cfba337eab606fca09cd800748756ac94356a0e/frontend/src/images/CVSS.png)


### Customizable
Customize the descriptions of each module with your own markdown-formatted text. Disable any modules that are not needed, and they will not be shown. Tailor the toolkit to your specific requirements.
<img width="1233" alt="settings" src="https://github.com/vclabs/osint_toolkit/blob/4cfba337eab606fca09cd800748756ac94356a0e/frontend/src/images/Settings.png">

## Planned features for later versions
- Add more OSINT services
- Generate hashes from files to analyse them in a privacy-friendly way.
- Export reports
- Save history and generate statistics
- Metadata viewer

## Deploy with docker
1. Download the repository and extract the files
2. Navigate to the directory where the `docker-compose.yaml` file is located
3. If you deploy the app on a remote machine, set the `BACKEND_URL` argument in the Compose file to the remote machines IP address
4. Run the following command: `docker-compose up -d`
5. Once the container is running, you can access the app in your browser at http://localhost:3000

## Deploy from source
### Prerequisites
- Python 3.10 or higher
- Pip (Python package installer)
- Node.js 17 or higher with NPM
- Port 3000 and 8000 available

### Backend
#### Windows
1. Install Python requirements: `py -m pip install -r requirements.txt`
2. Start the backend: `py -m uvicorn main:app`

#### Linux / MacOS
1. Install Python requirements: `pip install -r requirements.txt`
2. Start the backend: `uvicorn main:app`

### Frontend
1. Install required packages: `npm install`
2. Start frontend: `npm start`
3. Access the app in your browser at http://localhost:3000
