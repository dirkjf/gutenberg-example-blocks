# Gutenberg Example Blocks

A plugin for Wordpress. Three examples of different ways to create a Gutenberg block. The blocks are all the same and only have two attributes: `title`and `borderColor`. How these blocks are rendered and how they are stored in the database is different for each one. This plugin shows three different methods:


| Static Block   |      Server Side Block      |  React Block |
|----------|-------------|------|
|  The simplest of blocks, all attributes plus the markup are saved as static HTML.  |  Only the attributes are stored in the database. On the server-side this block is rendered using PHP. | HTML is saved in a div that contains all attributes as JSON. On the front-end this is rendered using React. |

You can use this plugin as an example to create your own blocks using one of the three methods.

---

## Installation

Clone this repository
```
git clone https://github.com/dirkjf/gutenberg-example-blocks
```

Install dependencies
```
composer install
```

Install JS dependencies
```
yarn install
```

Create autoload file with Composer for PHP classloading
```
composer dumpautoload -o
```

---

## Configuration
In the `/config` directory, you can change the block namespace and category, You will also find some settings for Webpack. 

---
## Asset building
Done with Webpack. Run `yarn start` to start the live server and `yarn build` to generate assets for production. 