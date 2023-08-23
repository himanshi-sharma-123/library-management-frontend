import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button
            LinkComponent={Link}
            to="/add"
            sx={{ marginTop: 15, background: "orangered" }}
            variant="contained"
          >
            <Typography variant="h3">Add Books</Typography>
          </Button>
        </Box>
      </div>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View All products</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;

// import React from "react";
// import { Link } from "react-router-dom";
// import StudentIMage from "../images/student.jpg";
// import AdminIMage from "../images/admin.jpg";

// const Home = () => {
//   return (
//     <div className="HomePage">
//       <div
//         className="col-md-6 m-auto"
//         style={{ display: "flex", backgroundColor: "white", padding: "5%" }}
//       >
//         <div className="card" style={{ alignItems: "center" }}>
//           <img
//             src={AdminIMage}
//             alt="StudentIMage"
//             style={{ height: "300px", width: "300px" }}
//           />
//           <br />
//           <Link className="link_class" to="/adminLogin">
//             {" "}
//             <h3 style={{ fontFamily: "Oswald" }}>Signin as Admin</h3>
//           </Link>
//         </div>
//         <div
//           className="card"
//           style={{ marginLeft: "10%", alignItems: "center" }}
//         >
//           <img
//             src={StudentIMage}
//             alt="StudentIMage"
//             style={{ height: "300px", width: "300px" }}
//           />
//           <br />
//           <Link className="link_class" to="/login">
//             {" "}
//             <h3 style={{ fontFamily: "Oswald" }}>Signin as Student</h3>
//           </Link>
//         </div>
//       </div>
{
  /* <div>
                <Link to="/login">signin as a admin</Link>
            </div>
            <div>

                <Link to="/login">signin as a student</Link>
            </div>
            <div>
                <Link to="/addBook">Add Book</Link>
            </div>
            <div>

                <Link to="/allBook">All Book</Link>
            </div>
            <div>

<Link to="/stuReqIssue">Issue Request</Link>
</div>
            <div>
        
<Link to="/manageStudent">Manage Student</Link>
// </div> */
}
//     </div>
//   );
// };

// export default Home;
