import Realtime from "@/components/Realtime";
import Tablee from "@/components/Tablee";
import DeviceList from "@/components/deviceList";
import deviceNew from "@/components/deviceNew";
import LineChart from "@/components/charts/LineChart";
import DataTable from "@/components/DataTable";
import Settings from "@/components/Settings";
import SettingsStr from "@/components/SettingsStr";
import Machinecard from "@/components/Machinecard";
import Report from "@/components/Report";
import jurnal from "@/components/jurnal";
import SettingsPanel from "@/components/settingsPanel";
import DeviceCard from "@/components/DeviceCard";
import UserAdd from "@/components/UserAdd";
import LoginForm from "@/components/LoginForm";
import UserCard from "@/components/UserCard";
const routes = [
    {
        path:'/login/auth',
        name: 'LoginForm',
        component: LoginForm,
    },
    {
        path: '/realtime',
        name: 'realtime',
        component: Realtime,
        meta: { headerImage: 'chasu_MDC',
            headerText: 'Cтраница предназначена для просмотра работы оборудования в реальном времени'
        },
    },
    {
        path: '/Tablee',
        name: 'Tablee',
        component: Tablee,
    },
    {
        path: '/device/list',
        name: 'DeviceList',
        component: DeviceList,
        meta: { headerImage: 'stanok_MDC',
            headerText: 'Cтраница отображения подключённого оборудования' },
    },
    {
        path: '/device/new',
        name: 'deviceNew',
        component: deviceNew,
        meta: { headerImage: 'stanok_MDC',
            headerText: 'Cтраница  редакирования оборудования' },
    },
    {
        path: '/line-chart',
        name: 'linechart',
        component: LineChart,
    },
    {
        path: '/dataTable',
        name: 'dataTable',
        component: DataTable,
    },

    {
        path: '/settings/users',
        name: 'SettingsStr',
        component: SettingsStr,
        meta: { headerImage: 'nastroiki_MDC',
            headerText: 'Cтраница со списком пользователей' },
    },
    {
        path: '/machinecard',
        name: 'machinecard',
        component: Machinecard,
        meta: { headerImage: 'stanok_MDC',
            headerText: 'Cтраница для просмотра подробной информации оборудования' },
    },
    {
        path: '/report',
        name: 'report',
        component: Report,
        meta: { headerImage: 'othet_MDC',
            headerText: 'Cтраница для вывода отчётной информаци' },
    },
    {
        path: '/settings/connections',
        name: 'Settings',
        component: Settings,
        meta: { headerImage: 'nastroiki_MDC',
            headerText: 'Cтраница настроек оборудования' },
    },
    {
        path: '/jurnal',
        name: 'jurnal',
        component: jurnal,
        meta: { headerImage: 'jurnal_MDC',
            headerText: 'Cтраница со статистикой работы оборудования' },
    },
    {
        path: '/settings/devices',
        name: 'SettingsPanel',
        component: SettingsPanel,
        meta: { headerImage: 'nastroiki_MDC',
            headerText: 'Cтраница настроек оборудования' },
    },
    {
        path: '/device/card/:device_id?',
        name: 'device_card',
        component: DeviceCard,
        props:{
            device_id: 1
        },
        meta: { headerImage: 'nastroiki_MDC',
            headerText: 'Cтраница настроек оборудования' },
    },
    {
        path: '/user/new',
        name: 'UserAdd',
        component: UserAdd,
    },
    {
        path: '/UserCard',
        name: 'UserCard',
        component: UserCard,
    },
]

export default routes;