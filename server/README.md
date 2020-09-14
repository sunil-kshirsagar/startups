# Treadhooks-API

# project Setup 

First time process to follow

## Install Node
https://nodejs.org/en/download/

## Install Yarn

https://classic.yarnpkg.com/en/docs/install/#windows-stable






# Run Project

 Open terminal window go to the root directory of the project *Treadhooks-API*

## Command to run
1)  `yarn install`

2)  `yarn start`
































# Error

## Problem
[nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached


## solution
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

## source 
https://stackoverflow.com/questions/53930305/nodemon-error-system-limit-for-number-of-file-watchers-reached




## Problem
Cannot set headers after they are sent to the client

## solution 
When a return statement is used in a function body, the execution of the function is stopped. If specified, a given value is returned to the function caller.

With this in mind, our request handler function should be modified to include a return statement

## source 
https://www.codementor.io/@oparaprosper79/understanding-node-error-err_http_headers_sent-117mpk82z8
