import Filters from "./filters/filters";
import Norm from "./form/form";
import JobList from "./jobLists/jobList";
import TopList from "./searchTabs/topJob";

function Jobspage(){
    return(
        <>
        <div className="text-center mx-80 mb-40">
            <div className="py-32" >
                <TopList/>
            </div>
            <div className="px-20">
                <Filters/>
            </div>
            <div className=""><JobList/></div>
            {/* <Norm/> */}
            
        </div>
        </>
    );
}

export default Jobspage;