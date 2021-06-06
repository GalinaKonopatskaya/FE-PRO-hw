
const fieldNames = {
	"memory_size": "Обьем памяти",
	"screen_size": "Диагональ",
	"horse_power": "Мощность",
	"color": "Цвет",
	"connection_type": "Тип подключения",
	"username": "Имя",
	"usersurname": "Фамилия",
	"gender": "Пол",
	"age": "Возраст",
	"email": "E-mail",
	"userphone": "Номер телефона",
	"password": "Пароль",
	"category": "Категория товара",
	"item" : "Наименование",


}

const product = {
	phone:
	{
		name: "Телефон",

		models: {
			Iphone: "Iphone",
			Samsung: "Samsung",
			Lenovo: "Lenovo",
		},

		attrList: [
			{
				codeName: "screen_size",
				//name: "Диагональ",
				values: [4, 5, 6],
				unit: "&#34;"
			},

			{
				codeName: "memory_size",
				//name: "Обьем памяти", 
				values: [32, 64, 128],
				unit: "Гб"
			}
		]
	},
	scooter:
	{
		name: "Скутер",

		models: {
			Yamaha: "Yamaha",
			Honda: "Honda",
			"Harley Davidson": "Harley Davidson"
		},

		attrList: [
			{
				codeName: "horse_power",
				//name: "Мощность ",
				values: [20, 50, 100],
				unit: "(л.с.)"
			},

			{
				codeName: "color",
				//name: "Цвет",
				values: ["Красный", "Зеленый", "Черный"],
				unit: ""
			}
		]
	},
	memory_card:
	{
		name: "Карта памяти",

		models: {
			Transend: "Transend",
			Kingston: "Kingston"
		},

		attrList: [
			{
				codeName: "memory_size",
				//name: "Обьем памяти",
				values: [32, 64, 128],
				unit: "Гб"
			},

			{
				codeName: "connection_type",
				//name: "Тип подключения",
				values: ["USB2.0", "USB3.0", "TYPE C"],
				unit: ""
			}
		]
	}
};
