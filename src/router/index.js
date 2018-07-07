import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from "../page/customer/Home";
import DownloadApp from "../page/customer/DownloadApp";
import LntelligentLock from "../page/customer/LntelligentLock";
import DeclarationForm from "../page/customer/DeclarationForm";
import HouseList from "../page/tenant/HouseList";
import HouseInfomation from "../page/tenant/HouseInfomation";
import ServiceList from "../page/landlord/ServiceList";
import ServiceInfo from "../page/landlord/ServiceInfo";
import ServiceWrite from "../page/landlord/ServiceWrite"
import ServicePayment from "../page/landlord/ServicePayment"
import ServiceFinance from "../page/landlord/ServiceFinance"
import IntelligentLock from "../page/landlord/IntelligentLock"
import IntelligentInfo from "../page/landlord/IntelligentInfo"
import IntelligentBuy from "../page/landlord/IntelligentBuy"
import IntelligentUser from "../page/landlord/IntelligentUser"
import IntelligentRecord from "../page/landlord/IntelligentRecord"
import SendKey from "../page/landlord/SendKey"
import PeopleStore from "../page/landlord/PeopleStore"
import PeopleBroker from "../page/landlord/PeopleBroker"
import OpenAccount from "../page/landlord/OpenAccount"
import OpenBroker from "../page/landlord/OpenBroker"
import LandlordInfomation from "../page/tenant/LandlordInfomation";
import IndividualHome from "../page/Individual/IndividualHome";
import IndividualRelease from "../page/Individual/IndividualRelease";
import IndividualContract from "../page/Individual/IndividualContract";
import IndividualDetails from "../page/Individual/IndividualDetails";
import IndividualRepair from "../page/Individual/IndividualRepair";
import RepairOrder from "../page/Individual/RepairOrder";
import IndividualPayment from "../page/Individual/IndividualPayment";
import AgentHome from "../page/agent/AgentHome";
import AgentRelease from "../page/agent/AgentRelease";
import AgentContract from "../page/agent/AgentContract";
import AgentDetails from "../page/agent/AgentDetails";
import AgentRepair from "../page/agent/AgentRepair";
import AgentRepairOrder from "../page/agent/AgentRepairOrder";
import UnionHome from "../page/union_store/UnionHome";
import UnionList from "../page/union_store/UnionList";
import UnionInfomation from "../page/union_store/UnionInfomation";
import UnionContract from "../page/union_store/UnionContract";
import UnionContractInfo from "../page/union_store/UnionContractInfo";
import UnionContractPayment from "../page/union_store/UnionContractPayment";
import ContractExamine from "../page/union_store/ContractExamine";
import ContractExamineInfo from "../page/union_store/ContractExamineInfo";
import Login from "../page/user/Login";
import Regist from "../page/user/Regist";
import Scavenging from '../page/customer/Scavenging';

export default hot(module)(
    () => (
        <Router>
            <div className="main-wrap">
                <Switch>
                    <Route exact path="/" component={DownloadApp}/>
                    <Route exact path="/test" component={Home}/>
                    <Route exact path="/scavenging" component={Scavenging}/>
                    <Route exact path="/lntelligentLock" component={LntelligentLock} />
                    <Route exact path="/declarationForm" component={DeclarationForm} />
                    <Route exact path="/houseList" component={HouseList} />
                    <Route exact path="/houseInfomation" component={HouseInfomation} />

                    <Route exact path="/servicelist" component={ServiceList} />
                    <Route exact path="/serviceinfo" component={ServiceInfo} />
                    <Route exact path="/servicewrite" component={ServiceWrite} />
                    <Route exact path="/servicepayment" component={ServicePayment} />
                    <Route exact path="/servicefinance" component={ServiceFinance} />
                    <Route exact path="/intelligentlock" component={IntelligentLock} />
                    <Route exact path="/intelligentinfo" component={IntelligentInfo} />
                    <Route exact path="/intelligentbuy" component={IntelligentBuy} />
                    <Route exact path="/intelligentuser" component={IntelligentUser} />
                    <Route exact path="/intelligentrecord" component={IntelligentRecord} />
                    <Route exact path="/sendkey" component={SendKey} />
                    <Route exact path="/peoplestore" component={PeopleStore} />
                    <Route exact path="/peoplebroker" component={PeopleBroker} />
                    <Route exact path="/openaccount" component={OpenAccount} />
                    <Route exact path="/openbroker" component={OpenBroker} />

                    <Route exact path="/landlordInfomation" component={LandlordInfomation} />
                    <Route exact path="/individualHome" component={IndividualHome} />
                    <Route exact path="/individualRelease" component={IndividualRelease} />
                    <Route exact path="/individualContract" component={IndividualContract} />
                    <Route exact path="/individualDetails" component={IndividualDetails} />
                    <Route exact path="/individualRepair" component={IndividualRepair} />
                    <Route exact path="/repairOrder" component={RepairOrder} />
                    <Route exact path="/individualPayment" component={IndividualPayment} />
                    <Route exact path="/agentHome" component={AgentHome} />
                    <Route exact path="/agentRelease" component={AgentRelease} />
                    <Route exact path="/agentContract" component={AgentContract} />
                    <Route exact path="/agentDetails" component={AgentDetails} />
                    <Route exact path="/agentRepair" component={AgentRepair} />
                    <Route exact path="/agentRepairOrder" component={AgentRepairOrder} />
                    <Route exact path="/unionHome" component={UnionHome} />
                    <Route exact path="/unionList" component={UnionList} />
                    <Route exact path="/unionInfomation" component={UnionInfomation} />
                    <Route exact path="/unionContract" component={UnionContract} />
                    <Route exact path="/unionContractInfo" component={UnionContractInfo} />
                    <Route exact path="/unionContractPayment" component={UnionContractPayment} />
                    <Route exact path="/contractExamine" component={ContractExamine} />
                    <Route exact path="/contractExamineInfo" component={ContractExamineInfo} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/regist" component={Regist} />
                </Switch>

            </div>
        </Router>
    )
);
