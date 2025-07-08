import { useEffect, useState } from "react";
import { getProjectData } from "../../api/fetchProjectData";

export default function About() {

    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const data = await getProjectData();
            setProjectData(data);
        }
        fetchData();
    },[]);

    return (
        <>
            <p>
                This is a test for fetching data
            </p>

            <p>
                {projectData ? JSON.stringify(projectData, null, 2) : 'Loanding project data...'}
            </p>
        </>
    );
  }