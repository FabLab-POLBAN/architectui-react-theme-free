import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS
import Job from './Basic';

// NEW JOB
import NewJob from './Create';

// JOB DETAILS
import JobDetail from './Details';

// TAKE A JOB
import TakeJob from './Take';

// QUEUE
import QueueInfo from './Queue';

// Layout
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

const Jobs = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    {/* base */}
                    <Route path={`${match.url}/basic`} component={Job}/>
                    {/* create new */}
                    <Route path={`${match.url}/create`} component={NewJob}/>
                    {/* details */}
                    <Route path={`${match.url}/detail`} component={JobDetail}/>
                    {/* details */}
                    <Route path={`${match.url}/take`} component={TakeJob}/>
                    {/* details */}
                    <Route path={`${match.url}/queue`} component={QueueInfo}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Jobs;