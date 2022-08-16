import express from "express";

const app = express();

//pug를 view enging으로 설정
app.set("view engine","pug");
//express에 template 위치 지정
app.set("views", __dirname + "/views");
//public url을 생성해서 유저에게 파일 공유
app.use("/public", express.static(__dirname + "/public"));
// home.pug를 render해주는 route handle
app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);
