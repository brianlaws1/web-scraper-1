//load axios and cheerio modules
const axios = require('axios');
const cheerio = require('cheerio');

const getPostTitles = async () => {
	try {
    /*'await' keyword
    it is only allowed in a async() block
    makes sure function waits for data to return
    before proceeding with the next instruction */
    //********************* */
    // {data} gets axios.data
		const { data } = await axios.get(
			'https://webscraper.io/test-sites/e-commerce/allinone'
		);
    //look at all the data that is gathered
    //its html
    //console.log(data);
		const $ = cheerio.load(data);
		const postTitles = [];

		$('a').each((_idx, el) => {
			const postTitle = $(el).text()
			postTitles.push(postTitle)
		});

		return postTitles;
	} catch (error) {
		throw error;
	}
};

getPostTitles()
.then((postTitles) => console.log(postTitles));