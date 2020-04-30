const axios = require('axios')

module.exports = {
  async active (req, res) {
    const { actions } = req.body
    let data = []

    if(!actions){
      return res.json('Sem actions')
    }

    console.log(actions)

    actions.map(async (item) => {
      data.push( {
        Url: `http://blynk-cloud.com/${process.env.TOKEN_BLYNK}/update/${item.pin_name}`,
        Value: item.value
      })
    })

    function getAllData(URLs){
      return Promise.all(URLs.map(fetchData));
    }

    function fetchData(DATA) {
      return axios
        .put(DATA.Url, [DATA.Value])
        .then(function(response) {
          return {
            success: true,
            data: response.data
          };
        })
        .catch(function(error) {
          return { success: false };
        });
    }

    getAllData(data).then(resp=>{res.json(resp)}).catch(e=>{console.log(e)})
  
  } 
}