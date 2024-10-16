<template>
  <div class="role_perm_title">Управление ролями и разрешениями</div>
  <div class="container_roles">
    <div class="role_item" v-for="(role, index) in this.arrRoles" :key="index">
      <div class="div_roles">{{role.role_name}}</div>
      <div class="container_permissions">
        <div class="inputs_labels" v-for="(permission, index_perm) in this.arrPermissions" :key="index_perm">
          <div>
            <input
                class="check"
                type="checkbox"
                :id="'per_' + index + '_' + index_perm"
                v-model="arrRoles[index].permissions[permission.permission_id]">
          </div>
          <label
              class="labels_chekbox"
              :for="'per_' + index + '_' + index_perm">
            {{permission.permission_name}}
          </label>
        </div>
      </div>
    </div>
  </div>
  <button class="save_btn" @click="savePermissions">Сохранить</button>
</template>

<script>
import axios from "axios";
import {translatePermissions} from "@/utils/translatePermissions";

export default {
  name: "ManageRoles",

  data() {
    return{
      arrRoles: [],
      arrPermissions: []
    }
  },

  methods:{
    async getAllRoles() {
      try {
        const response = await axios.get('http://localhost:3000/api/roles/list');
        const roles = response.data.roles;

        // Теперь загружаем разрешения для каждой роли
        const rolesWithPermissions = await Promise.all(
            roles.map(async (role) => {
              console.log(role.role_id)

              const permissionsResponse = await axios.get(`http://localhost:3000/api/permissions/getById/${role.role_id}`);
              const permissions = permissionsResponse.data.permissions;

              // Формируем объект с отмеченными разрешениями для роли
              const permissionsMap = {};
              permissions.forEach(permission => {
                permissionsMap[permission.id_permission] = true; // Отмечаем как выбранное
              });

              console.log(permissionsMap)
              // Возвращаем роль с отмеченными разрешениями
              return {
                ...role,
                permissions: permissionsMap
              };
            })
        );

        // Присваиваем роли с разрешениями в массив
        this.arrRoles = rolesWithPermissions;
      } catch (error) {
        console.error("Ошибка при получении ролей:", error);
      }
    },

    getAllPermissions() {
      axios.get('http://localhost:3000/api/permissions/list').then((response) => {
        this.arrPermissions = response.data.permissions;

        this.arrPermissions.forEach((item, index) => {
          let newName = translatePermissions(item.permission_name);
          this.arrPermissions[index].permission_name = newName;
        });
      });
    },

    savePermissions() {
      const dataToSend = this.arrRoles.map(role => {
        const selectedPermissions = Object.keys(role.permissions)
            .filter(permissionId => role.permissions[permissionId]);

        return {
          role_id: role.role_id,
          permissions: selectedPermissions // Собираем ID разрешений
        };
      });

      console.log(dataToSend);

      axios.post('http://localhost:3000/api/permissions/set/', dataToSend)
          .then(response => {
            console.log("Разрешения успешно сохранены", response);
          })
          .catch(error => {
            console.error("Ошибка при сохранении разрешений", error);
          });
    }
  },

  beforeMount() {
    this.getAllRoles();
    this.getAllPermissions();
  }
}
</script>

<style scoped>
.role_perm_title {
  margin-top: 40px;
  font-size: 20px;
  text-align: center;
}

.container_roles {
  margin-top: 100px;
  display: flex;
  justify-content: space-evenly;
}

.role_item {
  width: 300px;
  height: 180px;
  border: 2px solid #2ac8b7;
  border-radius: 3px;
}

.div_roles {
  padding-top: 15px;
  height: 30px;
  text-align: center;
  border-bottom: 1px solid #2ac8b7;
}

.container_permissions {
  margin-top: 20px;
}

.inputs_labels {
  display: flex;
}

.check {
  margin-left: 10px;
  width: 15px;
  height: 15px;
}

.labels_chekbox {
  margin-left: 30px;
}

.save_btn {
  margin: 40px 0 0 170px;
  width: 180px;
  height: 35px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #0ab3b3;
  font-size: 16px;
}
</style>
