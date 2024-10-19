import Avatar from "@mui/material/Avatar"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"

import Linkedin from "../../assets/linkedin.svg?react"
import GitHubIcon from '@mui/icons-material/GitHub';

type Props = {
    ownerName: string;
    ownerPic: string;
    linkedin: string;
    github: string;
}

export default function Section({ ownerName, ownerPic, linkedin, github }: Props) {
    return (
        <Paper elevation={3} sx={{ width: "100%", p: 2 }}>
            <Stack direction="row" spacing={3} alignItems="center">
                <Avatar
                    alt={ownerName}
                    src={ownerPic}
                    sx={{ width: 150, height: 150 }}
                />
                <div>
                    <Typography variant="h4">{ownerName}</Typography>
                    <IconButton target="_blank" href={`https://github.com/${github}/`} sx={{ mt: -0.5 }}><GitHubIcon /></IconButton>
                    <IconButton target="_blank" href={`https://www.linkedin.com/in/${linkedin}/`} sx={{ "& SVG": { height: 25, width: 25 } }}><Linkedin /></IconButton>
                </div>
            </Stack>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1">Who am i?</Typography>
        </Paper>
    )
}
