# موزّع صور A4 — React Native CLI

تطبيق Android أصلي يعمل بأسلوب **Bare React Native CLI** وTypeScript، بدون Expo أو أي حزمة تبدأ بـ `expo-`.

## الوظائف الحالية

- معاينة ورقة A4 بنسبة صحيحة مقسّمة إلى ٨ خلايا (٢ × ٤).
- اختيار خلية بالنقر عليها وإضافة صورة من الجهاز.
- قص الصورة من خلال `react-native-image-crop-picker`، مع تدوير ٩٠ درجة والتكبير/التصغير.
- نمطا «ملء الخلية» و«احتواء كامل».
- تبديل موضع الصورة بين الخلايا ١–٨.
- حفظ بيانات المشروع محليًا في SQLite عبر `react-native-sqlite-storage`.
- زر تصدير/طباعة يستخدم مشاركة Android، ويمكن اختيار «طباعة» أو «حفظ PDF» من النظام.

## التشغيل المحلي

```bash
npm install
npm start
# في نافذة أخرى بعد تشغيل محاكي Android أو توصيل جهاز:
npm run android
```

لبناء APK عبر Android Studio أو Gradle:

```bash
cd android
./gradlew assembleDebug
```

يتطلب البناء المحلي Android SDK وJava/Android Studio مضبوطين على الجهاز المستضيف.
