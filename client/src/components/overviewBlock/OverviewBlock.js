import React from 'react';
import './OverviewBlock.css';

function OverviewBlock({ id }) {
    return (
        <div className="block overview-block">
            <div className="overview-content" id={"project-block" + id}>
                <div className="overview-text" id="overview-text">
                    <h2 className="colored-text">Are you ready to find your next job?</h2>
                    <p>
                        We make it easy to find jobs in 2022!
                        At Career Fair Canada, connect with hiring managers and apply for jobs with companies hiring in Calgary!
                        You can’t miss out on this amazing opportunity, start working on your career goals today!
                        This year, discover new career paths with college recruiters and learn more on how to earn the certifications and diplomas needed to find jobs in Canada.
                        Stop planning and start acting by attending this job fair, kickstart your career journey today!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OverviewBlock;