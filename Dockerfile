FROM node:16.13.1-alpine
WORKDIR /portfolio_client
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN yarn
EXPOSE 3000
CMD ["yarn", "start"]    