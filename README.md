<h1 align="center">
  Big Money Rush Template
</h1>



## 🚀 Gatsby Website

1. **Install Gatsby CLI.**

    [install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli).


2. **Create .env.development file**

   Copy .example.env.development to .env.development


3. **Start developing.**

    ```shell
    gatsby develop
    ```
   Your site is now running at `http://localhost:8000`!
   
    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._


4. **Deploy to cloudflare pages.**

   Deployment triggers on Push to main branch.


## 🚀 Cloudflare Worker

1. **Install Gatsby CLI.**

    ```shell
    npm i @cloudflare/wrangler -g
    ```
   If you get Permission denied error then run the next command:
    ```shell
    sudo npm install @cloudflare/wrangler -g --unsafe-perm=true --allow-root
    ```

2. **Start developing.**

    ```shell
    cd workers
    wrangler dev
    ```

3. **Deploy worker.**

    ```shell
    cd workers
    wrangler publish
    ```
