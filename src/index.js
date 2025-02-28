// const path = require('path');
// const express = require('express');
// const morgan = require('morgan');
// const { engine } = require('express-handlebars');
// const { log } = require('console');

// const app = express();
// const port = 3000;

// const route = require('./routes');
// const db = require('./config/db');

// // Connect to db
// db.connect();

// app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.urlencoded());
// app.use(express.json());

// // HTML Logger
// // XMLHttpRequest, fetch, axios,

// // HTTP logger
// app.use(morgan('combined'));

// // template engine
// // app.engine('handlebars', engine());
// // app.set('view engine', 'handlebars');
// app.engine(
//   'hbs',
//   engine({
//     extname: '.hbs',
//   }),
// );
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'resources/views'));

// // Routes init
// route(app);

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });



// Import thư viện và module hệ thống
const path = require('path');               // Hỗ trợ xử lý đường dẫn file, thư mục
const express = require('express');          // Web framework chính
const morgan = require('morgan');            // Thư viện log request
const methodOverride = require('method-override');
const { engine } = require('express-handlebars'); // Đăng ký template engine (giao diện)

// Tạo app express và cổng server
const app = express();
const port = 3000;

// Import các module tự tạo
const route = require('./routes');          // File quản lý toàn bộ route
const db = require('./config/db');          // File cấu hình kết nối database

// 1. Kết nối MongoDB
db.connect();

// 2. Khai báo thư mục chứa file tĩnh (public)
// => Các file như ảnh, css, js sẽ để trong thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// 3. Middleware xử lý dữ liệu từ form & JSON
// => Khi client gửi form hoặc gửi request dạng JSON lên server
app.use(express.urlencoded({ extended: true })); // Form HTML
app.use(express.json());                         // Request JSON (fetch, axios)

app.use(methodOverride('_method'))

// 4. HTTP Logger
// => In ra terminal thông tin mỗi request để dễ debug
app.use(morgan('combined'));

// 5. Cấu hình template engine (giao diện động)
// => Dùng Handlebars với đuôi file là .hbs
app.engine(
    'hbs', 
    engine({ 
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b, 
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// 6. Khởi tạo route (đường dẫn)
// => Đọc danh sách route từ file routes/index.js
route(app);

// 7. Mở cổng và lắng nghe request
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
