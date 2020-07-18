import '../styles/booktrade.scss'
import "bootstrap/dist/css/bootstrap.css";
import '../styles/newBook.scss'
import 'semantic-ui-css/semantic.min.css';

module.exports = {
  env: {
      MONGO_URI: "mongodb+srv://profiles:MongoPass@cluster0-f8o3q.gcp.mongodb.net/profiles?retryWrites=true&w=majority"
  }
}

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }