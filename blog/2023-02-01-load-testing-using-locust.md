---
title: Load Testing Using Locust.io
author: Luděk Nový
author_url: https://ludeknovy.tech
hide_table_of_contents: false
description: Quick example how to start load testing with Locust.io and generate better performance testing reports for it.
tags: ["load testing","performance testing", "Locust.io"]
---

Load testing is an important part of software development, as it helps determine an application's performance, scalability, and reliability under normal and expected user loads. Locust is an open-source load testing tool that allows developers to quickly and easily create application performance tests.

## Why Use Locust.io?

Locust.io is an excellent choice for load testing because it is easy to set up and use. It is also very flexible, allowing you to write your own custom test scripts. Furthermore, it can be run distributed across multiple machines, allowing you to simulate many user traffic and requests.

The main advantages of Locust are its scalability, flexibility, and ease of use. It is designed to be easy to learn and use, so developers can get up and running quickly. It also provides the ability to scale up the number of users and requests quickly and easily, making it an excellent choice for performance testing.

You'll need to install it on your system so you'll be able to start with Locust. Locust is available for all major operating systems, including Windows, Mac OS X, and Linux. Once installed, you can use the Locust command line interface to create a test simulation. This is where you will define the number of users and requests you want to simulate. You can also configure each user's behavior, such as the time between each request and the duration of each request.


## Example
For this example, we will use a simple FastAPI application and a Locust test script to simulate user traffic and requests.

### FastAPI App
First, we will create a FastAPI application to serve as the system under test.

```python
import uvicorn
from fastapi import FastAPI, Body

app = FastAPI()

@app.get('/')
def root():
    return {'message': 'Hello, world!'}

@app.post('/user')
def create_user(username: str = Body(...)):
    return {'message': f'User {username} created!'}

if __name__ == '__main__':
    uvicorn.run(app)


```

### Locust Test Script
Now, we will create a Locust test script to simulate user traffic and requests to the FastAPI application.

```python
from locust import HttpUser, TaskSet, task

class MyUser(HttpUser):
    @task
        def index(self):
        self.client.get('/')

    @task
    def create_user(self):
        self.client.post('/user', data={'username': 'test_user'})

```

This test script will simulate a single user making a request to the root URL of the FastAPI application and creating a user.

### Test Script Execution

You execute the test script by the following command:
`locust -f <test_script.py>`

Locust will bring up a user interface available at: `http://localhost:8089`. From there you can execute the test script.
But before the actual execution, you need to enter the number of users you want to simulate and the spawn rate. Spawn rate means how many users will be started per second.
And last but not least, you will need to enter a host. 

If everything was set up correctly, you just executed your first load test with Locust.io! Awesome!

Alright, this was a very basic execution which won't be most likely enough for a real word load testing scenario. To get there we will need to generate a bigger load. And for this reason, we'll need to run locust in distributed mode.


## Running Locust Distributed
Locust can also be run and distributed across one or multiple machines. This allows you to simulate a larger amount of user traffic and requests.

Locust's architecture consists of two nodes - the master and worker nodes. The master node collects statistics from the worker nodes and presents them in the web UI. The worker nodes are responsible for generating user traffic and requests.

To run the same test in the distributed mode we would use the following commands:

`locust -f <test_script.py> --master`

`locust -f <test_script.py> --worker --master-host=localhost`

The first command starts the locust master node, while the other connects the worker node to it.
It's recommended to run one worker node per CPU core at max to avoid any issues. Of course, the worker nodes can be started
from different machines, but be aware the test script must be available at all the machines.


For convenience, Locust can also be run in a Docker container. This allows you to spin up a distributed load test environment quickly, either using 
docker-compose or k8s.

## Reporting

### CSV
Retrieving Test Statistics in CSV Format
Once the test is complete, you can retrieve the test statistics in CSV format by running the following command:

`locust -f <test_script.py> --csv <output_file_name>`

Once the test simulation is configured, you can start running the test. Locust will then run the test simulation and provide results about the application's performance. This includes metrics like average response time, requests per second, and error rates. 
### HTML Report

The HTML report can be downloaded from the locust UI during or after the test script execution. It can provide 
 basic charts and request stats, that include metrics like requests per second, error rates, and various percentiles for response times.
You can also use the results to identify bottlenecks in your application and make changes to improve performance.



## Conclusion
Overall, Locust is an excellent choice for performance testing. It is easy to install and use and provides detailed performance metrics and debugging capabilities. It is also highly scalable to test applications with many users and requests.

Are you looking for an easy way to measure the performance of your application and create detailed [performance test reports](/blog/2023-01-08-performance-test-report.md)? Look no further than JtlReporter!

With JtlReporter, you can quickly and easily create comprehensive [performance test reports](/blog/2023-01-08-performance-test-report.md) for your system with metrics, such as requests per second, various percentiles, error rate, and much more. Additionally, you can compare test runs side-by-side, create custom charts with any metrics available, and set up notifications for external services to be informed when a report is processed.

JtlReporter is the perfect way to measure and analyze performance when load testing your application using Locust.io. [Try JtlReporter](/docs/) today and get detailed performance test reports with ease!
