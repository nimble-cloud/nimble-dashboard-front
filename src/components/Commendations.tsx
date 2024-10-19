import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import Avatar from "@mui/icons-material/AccountCircleOutlined";

import "./styles.css";

import Shex from "../assets/shextech.webp";
import CC from "../assets/col_logo.webp";
import Yards from "../assets/100_logo.webp";

import Marquee from "react-fast-marquee";

function CardItem({
  companyName,
  subHeader,
  commendation,
  href,
  companyImage,
}: {
  companyName: string;
  subHeader: string;
  commendation: string;
  href: string;
  companyImage: JSX.Element & React.ReactNode;
}) {
  return (
    <Card
      sx={{
        width: "450px",
        marginRight: "30px",
        height: "250px",
      }}
    >
      <CardActionArea href={href} target="_blank">
        <CardHeader
          avatar={companyImage}
          title={companyName}
          subheader={subHeader}
        />
        <CardContent sx={{ overflowY: "auto", height: "175px", pb: 2, mt: -2 }}>
          <Typography variant="body2" color="text.secondary">
            {commendation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function Commendations() {
  return (
    <Marquee pauseOnHover>
      <CardItem
        companyName="Schextech IT Services"
        subHeader="Hugh - Owner"
        commendation="Sawyer is an exceptional engineer with a remarkable ability to solve complex problems. He consistently transforms basic ideas into comprehensive applications, often addressing challenges the client hadn't even anticipated. I highly recommend Sawyer as a full-stack developer, as he possesses a deep understanding of both technical development and diverse business processes."
        href="https://schextech.net"
        companyImage={<img src={Shex} height="50px" />}
      />
      <CardItem
        companyName="100 Yards"
        subHeader="Sam"
        commendation="Jake was fantastic to work with and we'll definitely reach out to him again as soon as we have any project. Communication was always fast and easy, and he was very accommodating in trying to connect on calls. He completed all the work successfully and we will plan on reaching out to him for our next data need."
        href="https://www.100yardstogo.com/"
        companyImage={<img src={Yards} height="50px" />}
      />
      <CardItem
        companyName="Colbyco Alarms"
        subHeader="Peter - Owner"
        commendation="Sawyer is a web and SQL developer par excellence with an extraordinary ability to swiftly transform ideas into robust applications. Their exceptional communication skills and knack for asking the right questions ensure project goals are crystal clear from the start. You can count on rapid responses, high-quality code, and clear explanations throughout the development process. If you're seeking a top-tier developer who excels in both technical expertise and communication, Sawyer is the ideal choice for your project. Working with him was not only productive but also a pleasure, setting a high standard for developers."
        href="https://colbycoalarms.ca/"
        companyImage={<img src={CC} height="50px" />}
      />
      <CardItem
        companyName="Ignacio"
        subHeader="Tenaris"
        commendation="Jake is one of the finest professionals I had the privilege to work with in my career. From the beginning, he showed great initiative and innovative critical thinking."
        companyImage={<Avatar />}
        href=""
      />
    </Marquee>
  );
}
