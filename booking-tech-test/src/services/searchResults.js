import axios from "axios";

export const getSearchResults = async searchTerm => {
  if (!searchTerm) {
    return [];
  }

  let results = [];
  await axios
    .get(
      "https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6",
      {
        params: {
          solrTerm: searchTerm
        }
      }
    )
    .then(response => {
      results = response.data.results.docs;
    });

  return results;
};
