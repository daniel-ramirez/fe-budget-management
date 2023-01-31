## FIRST PHASE
FROM node:18.13.0-alpine3.17 as compilation

LABEL developer="Daniel Ramirez"

ENV REACT_APP_BACK_END_BASE_URL=https://3000-danielramir-bebudgetman-cypuffss0e4.ws-us84.gitpod.io

COPY . /opt/budget-management-app

WORKDIR /opt/budget-management-app

RUN npm install

#building app
RUN npm run build

## SECOND PHASE
FROM nginx:1.22.1

COPY --from=compilation /opt/budget-management-app/build /usr/share/nginx/html
