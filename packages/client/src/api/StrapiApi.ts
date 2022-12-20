class StrapiApi {
  baseUrl: string;
  mediaUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:1337/api";
    this.mediaUrl = "http://localhost:1337/uploads";
  }

  getAllBills = async () => {
    const response = await fetch(this.baseUrl + "/bills")
    const data = await response.json();
    return data;
  }

  getProductByID = async (id: string) => {
    const response = await fetch(this.baseUrl + "/bills/" + id)
    const data = await response.json();
    return data;
  }

  provideBaseUrl = () => {
    return this.baseUrl;
  }
}

export default StrapiApi;