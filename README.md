# LoopBack 3.x + MongoDB

Archetype of Node.js developed with LoopBack and configured with a MongoDB database.

## LoopBack <img src="https://loopback.io/images/overview/loopback.svg" alt="drawing" width="30"/>

LoopBack is a highly-extensible, open-source Node.js framework. The LoopBack framework is a set of Node.js modules that you can use independently or together to quickly build REST APIs.
A LoopBack application interacts with data sources through the LoopBack model API, available locally within Node.js, remotely over REST, and via native client APIs for iOS, Android, and HTML5. Using these APIs, apps can query databases, store data, upload files, send emails, create push notifications, register users, and perform other actions provided by data sources and services.
Clients can call LoopBack APIs directly using Strong Remoting, a pluggable transport layer that enables you to provide backend APIs over REST, WebSockets, and other transports.
You can learn a lot more checking the [documentation](https://loopback.io/doc/en/lb3/index.html)

## MongoDB <img src="https://www.mongodb.com/assets/images/index/header-img.png" alt="drawing" width="30"/>

MongoDB is free and open-source.
MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.
The document model maps to the objects in your application code, making data easy to work with.
Ad hoc queries, indexing, and real time aggregation provide powerful ways to access and analyze your data.
MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use.

## Prerequisites
- Node.js + npm
- Docker + MongoDB

## Installation guide
- npm install
- node server/create-lb-models.js
- npm start / node .
