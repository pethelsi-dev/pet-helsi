import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken, setUserType } from "./slice";

axios.defaults.baseURL = "http://alb-1743355926.eu-north-1.elb.amazonaws.com/api";
const setAuthHeader = token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const fetchSignup = createAsyncThunk(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/v1/auth/register", data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue({
          status: error.response.status,
          message: error.response.data.message,
        });
      } else {
        return thunkAPI.rejectWithValue({
          status: 500,
          message: "Network error",
        });
      }
    }
  }
);





// const apiInstance = axios.create({
//   baseURL: "http://alb-1743355926.eu-north-1.elb.amazonaws.com/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (newUser, thunkAPI) => {
    try {
      const response = await apiInstance.post("/v1/auth/register", newUser);

      // Сохранение полученного токена в хедеры для дальнейших запросов
      const token = response.data.token;
      setAuthHeader(token); // Сохраните токен в заголовки

      // Сохранение данных пользователя в Redux
      thunkAPI.dispatch(setToken({ token }));
      thunkAPI.dispatch(setUserType(response.data.userType));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const signIn = createAsyncThunk(
//   "auth/signin",
//   async (user, thunkAPI) => {
//     try {
//       const response = await apiInstance.post("/users/login", user);
//       setAuthHeader(response.data.data.accessToken);

//       return response.data.data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const signIn = createAsyncThunk(
//   "auth/signIn",
//   async (credentials, thunkAPI) => {
//     try {
//       // Отправка POST-запроса на авторизацию пользователя
//       const response = await apiInstance.post("/users", credentials);
//       // Сохраняем token в store
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const signOut = createAsyncThunk("auth/signout", async (_, thunkAPI) => {
//   try {
//     await apiInstance.post("/users/logout");
//     clearAuthHeader();
//   } catch (error) {
//     clearAuthHeader();
//     toast.error(`Something went wrong in Sign Out: ${error.message}`);
//     thunkAPI.rejectWithValue(error.message);
//   }
// });
// export const signOut = createAsyncThunk(
//   "auth/signOut",
//     async (_, thunkAPI) => {
//         try {
//             // Очистка данных авторизации (например, очистка token)
//             // Здесь может быть ваш запрос на сервер, если это необходимо
//             // Пока просто возвращаем пустой объект
//             return {};
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
// });

// export const refresh = createAsyncThunk(
//   "auth/refresh",
//   async (_, thunkAPI) => {
//     try {
//       const response = await apiInstance.post("/users/refresh");
//       setAuthHeader(response.data.data.accessToken);
//       return response.data.data.accessToken;
//     } catch (error) {
//       // clearAuthHeader();
//       toast.error(`Something went wrong in Refresh: ${error.message}`);
//       thunkAPI.rejectWithValue(error.message);
//     }
//   },
//   {
//     condition: (_, thunkAPI) => {
//       const fullReduxState = thunkAPI.getState();
//       const token = fullReduxState.auth.token;

//       return token !== null;
//     },
//   }
// );
// export const refreshUser = createAsyncThunk(
//   "auth/refreshUser",
//   async (_, thunkAPI) => {
//     try {
//       // Запрос на обновление данных пользователя
//       const response = await apiInstance.get("/users/1");  // Пример запроса (ID = 1)
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
