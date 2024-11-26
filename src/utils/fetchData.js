const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

export const Searchvideos = async (query) => {
 const res = await fetch(`${BASE_URL}/${query}`, {
    method: "GET",
    headers: {
            'x-rapidapi-key': 'a316560110msh80daca5b6328064p10eca8jsnf47208dc9caa',
		'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'

    }
  })

    const result = await res.json();
    return result; 
} 