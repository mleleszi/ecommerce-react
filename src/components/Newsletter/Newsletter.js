import SendIcon from "@mui/icons-material/Send";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="Newsletter">
      <h1>Newsletter</h1>
      <p>Get timely updates from your favourite products</p>
      <div className="input-container">
        <input type="text" placeholder="Your email: " />
        <button>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
