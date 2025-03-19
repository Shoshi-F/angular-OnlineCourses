// import { HttpInterceptorFn } from '@angular/common/http';

// export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

//   const token = sessionStorage.getItem('token');

//   if (token) {
//     const clonedRequest = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     return next(clonedRequest);
//   }

//   return next(req);
// };
// ייבוא של HttpInterceptorFn מהמודול של Angular
import { HttpInterceptorFn } from '@angular/common/http';

// הגדרת ה-interceptor בשם tokenInterceptor
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  // שלב 1: קבלת הטוקן מה-session storage
  // מנסה לקבל את הטוקן ששמור ב-session storage של הדפדפן
  const token = sessionStorage.getItem('token');

  // שלב 2: בדיקה אם הטוקן קיים
  // אם הטוקן קיים, נבצע את השלב הבא
  if (token) {
    // שלב 3: שכפול הבקשה
    // כאן אנחנו משכפלים את הבקשה המקורית כדי לא לשנות אותה
    const clonedRequest = req.clone({
      // הוספת כותרת Authorization עם הטוקן
      setHeaders: {
        Authorization: `Bearer ${token}`  // הכותרת היא בפורמט Bearer
      }
    });

    // שלב 4: שליחת הבקשה המשוכפלת
    // שולחים את הבקשה החדשה לשרת עם הכותרת שהוספנו
    return next(clonedRequest);
  }

  // שלב 5: אם אין טוקן
  // אם הטוקן לא קיים, נשלח את הבקשה המקורית כפי שהיא
  return next(req);
};
