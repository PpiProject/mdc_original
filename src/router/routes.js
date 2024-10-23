import Realtime from "@/components/Realtime";
import Tablee from "@/components/Tablee";
import DeviceList from "@/components/devices/deviceList";
import deviceNew from "@/components/devices/deviceNew";
import LineChart from "@/components/charts/LineChart";
import DataTable from "@/components/DataTable";
import Settings from "@/components/Settings";
import UserList from "@/components/users/UserList";
import Machinecard from "@/components/Machinecard";
import Report from "@/components/Report";
import jurnal from "@/components/jurnal";
import SettingsPanel from "@/components/settingsPanel";
import DeviceCard from "@/components/devices/DeviceCard";
import UserAdd from "@/components/users/UserAdd";
import LoginForm from "@/components/LoginForm";
import UserCard from "@/components/users/UserCard";
import ManageRoles from "@/components/roles/ManageRoles";
import Calendar from "@/components/Calendar";
import WebSocketTest from "@/components/WebSocketTest";
import DeviceReadingsTable from "@/components/DeviceReadingsTable";
const routes = [
    {
        path:'/login/auth',
        name: 'LoginForm',
        component: LoginForm,
    },
    {
        path:'/WebSocketTest',
        name: 'WebSocketTest',
        component: WebSocketTest,
    },
    {
        path: '/DeviceReadingsTable',
        name: 'DeviceReadingsTable',
        component: DeviceReadingsTable,
        meta: {
            headerImage: 'nastroiki_MDC',
            headerText: 'Отображение сигналов'
        }
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
        component: UserList,
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
    {
        path: '/settings/roles_and_permissions',
        name: 'ManageRoles',
        component: ManageRoles
    },
    {
        path:'/calendar',
        name: 'calendar',
        component: Calendar,
        meta: { headerImage: 'othet_MDC',
            headerText: 'Cтраница предназначена для просмотра и настройки нагрузок на персонал'
        },
    },
]

export default routes;