import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Copyright from "./Copyright";

const About = () => {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "background.paper",
          boxShadow: 2,
          my: 10,
          py: 10,
        }}
      >
        <div align="center">
          <a href="/">
            <img src="" alt="Logo" width="80" height="80" />
          </a>

          <h2 align="center">SplitApp</h2>

          <p align="center">
            Build with the MERN stack (MongoDB, Express, React and NodeJS).
            <br />
            <br />
            <Copyright />
            <br />
            <a href="https://github.com/harshal2390/SplitApp/issues">
              Report Bug
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://github.com/harshal2390/SplitApp/issues">
              Request Feature
            </a>
          </p>
        </div>
        <br />
        <center>
          <img
            src="https://raw.githubusercontent.com/tuzup/SplitApp/master/Screenshots/dashboard-main-transparent.png"
            alt="splitapp"
            width={"80%"}
          />
        </center>
        <Typography variant="h5">
          MERN Stack Group Expense Splitting Application
        </Typography>
        <br />
        <ul style={{ marginLeft: "40px" }}>
          <li>
            <a href="#key-features">Key Features</a>
          </li>
          <li>
            <a href="#technologies-used">Technologies used</a>
            <ul style={{ marginLeft: "40px" }}>
              <li>
                <a href="#frontend">Frontend</a>
              </li>
              <li>
                <a href="#backend">Backend</a>
              </li>
              <li>
                <a href="#database">Database</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#configuration-and-setup">Configuration and Setup</a>
          </li>
        </ul>
        <br />

        <center>
          <img src="" alt="Features" width={"80%"} />
        </center>
        <br />
        <h2 id="key-features">Key Features</h2>
        <br />
        <ul style={{ marginLeft: "40px" }}>
          <li>Create user groups and track group expense </li>
          <li>
            Keep track of shared expenses and settle your corresponding balances
            in a convenient and personalized way.{" "}
          </li>
          <li>Get Analytical graphs to understand your expenditure trend </li>
          <li>Multiple user registration.</li>
          <li>Authentication using JSON web token (JWT) </li>
        </ul>
        <br />
        <h2 id="technologies-used">Technologies used</h2>
        <br />
        <p>This project was created using the following technologies.</p>
        <br />
        <h4 id="frontend">Frontend</h4>
        <br />
        <ul style={{ marginLeft: "40px" }}>
          <li>React JS</li>
          <li>Redux (for managing and centralizing application state)</li>
          <li>Axios (for making api calls)</li>
          <li>Material UI (for User Interface)</li>
          <li>Chart.js (To display various analytics graphs)</li>
          <li>React-chartjs-2 </li>
          <li>Gravitar (for user profile picture)</li>
        </ul>
        <br />
        <h4 id="backend">Backend</h4>
        <br />
        <ul style={{ marginLeft: "40px" }}>
          <li>Express</li>
          <li>Mongoose</li>
          <li>JWT (For authentication)</li>
          <li>bcryptjs (for data encryption)</li>
        </ul>
        <br />
        <h4 id="database">Database</h4>
        <br />
        <ul style={{ marginLeft: "40px" }}>
          <li>MongoDB (MongoDB Atlas)</li>
        </ul>
        <br />
        <h2 id="configuration-and-setup">Configuration and Setup</h2>
        <br />
        <p>
          In order to run this project locally, simply fork and clone the
          repository or download as zip and unzip on your machine.{" "}
        </p>
        <br />
        <ul style={{ marginLeft: "40px" }}>
          <li>Open the project in your prefered code editor.</li>
          <li>Go to terminal -&gt; New terminal (If you are using VS code)</li>
          <li>
            Split your terminal into two (run the client on one terminal and the
            server on the other terminal)
          </li>
        </ul>
        <br />
        <p>In the first terminal</p>
        <pre>
          <Box sx={{ bgcolor: "#f0f0f0", p: 4, my: 4, overflowY: "scroll" }}>
            <Typography sx={{ wordWrap: "break-word" }}>
              <code>
                cd client <br />
                <br />
                //<span class5="hljs-keyword">to</span>{" "}
                <span class="hljs-keyword">install</span>{" "}
                <span class="hljs-keyword">client</span>-side dependencies{" "}
                <br />
                npm <span class="hljs-keyword">install</span> <br />
                <br />
                //<span class="hljs-keyword">to</span>{" "}
                <span class="hljs-keyword">start</span> the{" "}
                <span class="hljs-keyword">client</span>
                <br />
                npm <span class="hljs-keyword">start</span>
              </code>
            </Typography>
          </Box>
        </pre>

        <p>For setting up backend</p>
        <br />
        <ul style={{ marginLeft: "40px" }}>
          <li>create a .env file in the root of your directory.</li>
          <li>Provided the below details</li>
        </ul>
        <pre>
          <Box sx={{ bgcolor: "#f0f0f0", p: 4, my: 4, overflowY: "scroll" }}>
            <span class="hljs-attr">PORT</span>=
            <span class="hljs-number">3001</span>
            <br />
            <span class="hljs-attr">MONGODB_URI</span>=
            <br />
            <span class="hljs-attr">ACCESS_TOKEN_SECRET</span>=
          </Box>
        </pre>
        <p>
          Please follow{" "}
          <a href="https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i">
            This tutorial
          </a>{" "}
          to create your mongoDB connection url, which you&#39;ll use as your
          MONGODB_URI
        </p>
        <br />
        <p>
          Provide some random key in 'ACCESS_TOKEN_SECRET' or you could generate
          one using node. Enter the below command in terminal to genrate a
          random secret key{" "}
        </p>
        <Box component="div" sx={{ bgcolor: "#f0f0f0", p: 4, my: 4 }}>
          <Typography sx={{ wordWrap: "break-word" }}>
            node -e
            "console.log(require('crypto').randomBytes(256).toString('base64'));"{" "}
          </Typography>
        </Box>
        <p>
          In the second terminal (*in the project root directory (back-end))
        </p>
        <pre>
          <Box sx={{ bgcolor: "#f0f0f0", p: 4, my: 4, overflowY: "scroll" }}>
            <Typography sx={{ wordWrap: "break-word" }}>
              //to install server-side dependencies
            </Typography>
            npm <span class="hljs-keyword">install</span> <br />
            <br />
            <Typography sx={{ wordWrap: "break-word" }}>
              <span class="hljs-keyword">to</span>{" "}
              <span class="hljs-keyword">start</span> the{" "}
              <span class="hljs-keyword">server</span>
            </Typography>
            <Typography sx={{ wordWrap: "break-word" }}>
              npm <span class="hljs-keyword">start</span>{" "}
            </Typography>
          </Box>
        </pre>
        <br />

        <br />

        <Copyright />
        <br />
      </Container>
    </>
  );
};

export default About;
