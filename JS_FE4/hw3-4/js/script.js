/**
 * Created by Ярик on 09.03.2016.
 */
"use strict"
var mainObj = {
    createWrapper : function(){
        var wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        document.body.appendChild(wrapper)
    },
    createHeader : function(){
        var header = document.createElement('p');
        header.innerHTML = 'Тест по программированию';
        header.classList.add('center-header');
        var wrapper = document.querySelector('.wrapper');
        wrapper.insertBefore(header, null);
    },
    questionsAndAnswers : function(){
        var qAndA = [];
        /* Здесь будет происходить наполнение массива
        *q AndA*/

        /*вопрос-ответ №1*/
        var qa1 = {
            question : 'Вопрос №1',
            answers  : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
        }
        qAndA.push(qa1);
        /*вопрос-ответ №2*/
        var qa2 = {
            question : 'Вопрос №2',
            answers  : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
        }
        qAndA.push(qa2);
        /*вопрос-ответ №3*/
        var qa3 = {
            question : 'Вопрос №3',
            answers  : ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
        }
        qAndA.push(qa3);
        console.log(qAndA);
        /*создание формы и заполнение ее*/
        var form = document.createElement('form');
        form.classList.add('form-qa');
        var wrapper = document.querySelector('.wrapper');
        wrapper.appendChild(form);
        for (var i=0; i<qAndA.length; i++){
            /* Создание <p> */
            var pQuestion = document.createElement('p');
            pQuestion.classList.add('p-questions');
            form.appendChild(pQuestion);
            /* Создание <label> в <p> */
            var labelQuestion = document.createElement('label');
            labelQuestion.classList.add('label-questions')
            var counter = i + 1;
            labelQuestion.innerHTML = counter + ". " + qAndA[i].question;
            pQuestion.appendChild(labelQuestion);
            /* цикл на вывод ответов*/
            for (var j=0; j<3 ; j++){
                var labelAnswers = document.createElement('label');
                labelAnswers.classList.add('label-answers');
                pQuestion.appendChild(labelAnswers);
                /* создание и вывод Checkbox ВОТ ТУТ ПРОБЛЕМА! ВНИМАТЕЛЬНО ВСЕ ПРОВЕРИТЬ*/
                //var inputCheckbox = document.createElement('input');
                //inputCheckbox.classList.add('checkbox-answers');
                //inputCheckbox.appendChild(labelAnswers);
                //inputCheckbox.setAttribute('type', 'checkbox');
                //inputCheckbox.innerHTML = qAndA[i].answers[j];
            }
        }
    }
};
mainObj.createWrapper();
mainObj.createHeader();
mainObj.questionsAndAnswers();