const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

export const Searchvideos = (query) => {
 const res = fetch(`${BASE_URL}/${query}`, {
    method: "GET",
    headers: {
            'x-rapidapi-key': 'a316560110msh80daca5b6328064p10eca8jsnf47208dc9caa',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'

    }
  })

    const result = res.json();
    return result; 
} 