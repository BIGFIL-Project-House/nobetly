import React, { useState } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Moment from 'moment';

import { useTranslation } from 'react-i18next';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './assets/css/style.css';

import {
  SupervisedUserCircle,
  Home,
  MonetizationOn,
  Ballot,
  InsertChart,
  ArrowDropDownCircle,
} from '@material-ui/icons';
import i18n from './i18n';

import SoldierEdit from './components/soldier/edit.component';
import SoldierCreate from './components/soldier/create.component';
import SoldierList from './components/soldier/list.component';

import PostEdit from './components/post/edit.component';
import PostCreate from './components/post/create.component';
import PostList from './components/post/list.component';

import PostTimeEdit from './components/posttime/edit.component';
import PostTimeCreate from './components/posttime/create.component';
import PostTimeList from './components/posttime/list.component';

import BoutEdit from './components/bout/edit.component';
import BoutCreate from './components/bout/create.component';
import BoutList from './components/bout/list.component';

import DatesCreate from './components/dates/create.component';
import Config from './components/config/list.component';
import Created from './components/config/created.component';

export default function App() {
  const { t } = useTranslation();

  const [nowDate, seTnowDate] = useState(new Date());
  const [open, seTopen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <Route
        render={({ location, history }) => (
          <>
            {/*home page options*/}
            {location.pathname === '/' ? history.push('/created') : ''}
            <SideNav
              onMouseOver={() => seTopen(true)}
              onMouseOut={() => seTopen(false)}
              onToggle={() => {}}
              expanded={open}
              onSelect={(selected) => {
                const to = `/${selected}`;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle />

              <SideNav.Nav defaultSelected="Soldierlist">
                <NavItem eventKey="Soldierlist">
                  <NavIcon>
                    <SupervisedUserCircle
                      fontSize="large"
                      style={{ marginTop: '7px' }}
                    />{' '}
                  </NavIcon>
                  <NavText> Askerler </NavText>
                </NavItem>

                <NavItem eventKey="Postlist">
                  <NavIcon>
                    {' '}
                    <Home fontSize="large" style={{ marginTop: '7px' }} />{' '}
                  </NavIcon>
                  <NavText> Nöbet Yerleri </NavText>
                </NavItem>

                <NavItem eventKey="PostTimeList">
                  <NavIcon>
                    {' '}
                    <Ballot
                      fontSize="large"
                      style={{ marginTop: '7px' }}
                    />{' '}
                  </NavIcon>
                  <NavText> Nöbet Çizelgesi </NavText>
                </NavItem>

                <NavItem eventKey="config">
                  <NavIcon>
                    {' '}
                    <ArrowDropDownCircle
                      fontSize="large"
                      style={{ marginTop: '7px' }}
                    />{' '}
                  </NavIcon>
                  <NavText> Ayarlar </NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <main style={{ marginLeft: '55px' }}>
              <div>
                <Route path="/created" component={Created} />
                <Route path="/SoldierList" component={SoldierList} />
                <Route path="/SoldierCreate" component={SoldierCreate} />
                <Route path="/Soldier/edit/:id" component={SoldierEdit} />
                <Route path="/PostList" component={PostList} />
                <Route path="/PostCreate" component={PostCreate} />
                <Route path="/Post/edit/:id" component={PostEdit} />
                <Route path="/PostTimeList" component={PostTimeList} />
                <Route path="/PostTimeCreate" component={PostTimeCreate} />
                <Route path="/PostTime/edit/:id" component={PostTimeEdit} />
                <Route path="/BoutList" component={BoutList} />
                <Route path="/BoutCreate" component={BoutCreate} />
                <Route path="/Bout/edit/:id" component={BoutEdit} />
                <Route path="/config" component={Config} />
              </div>
            </main>{' '}
          </>
        )}
      />
    </Router>
  );
}
