FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install -g npm@10.2.3
RUN npm install -g pnpm
RUN ls
RUN pnpm install --production
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["bash"]
