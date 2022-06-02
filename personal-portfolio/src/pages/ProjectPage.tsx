import React from "react";

const ProjectPage = (match: { params: { title: any; }; }): any => {
    const title = match.params.title;

    return (
        <>
            <div>
                <h1>{match.params.title}</h1>
            </div>
        </>
    )
};


export default ProjectPage;