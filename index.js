function loadMastersFromXML() {
            const xmlDoc = parseXML(xmlData);
            const masters = xmlDoc.getElementsByTagName("master");
            const teamCardsContainer = document.getElementById('teamCards');
            
            // Очищаем контейнер
            teamCardsContainer.innerHTML = '';
            
            // Создаем карточки мастеров из XML
            for (let i = 0; i < masters.length; i++) {
                const master = masters[i];
                const name = master.getElementsByTagName("name")[0].textContent;
                const experience = master.getElementsByTagName("experience")[0].textContent;
  const style = master.getElementsByTagName("style")[0].textContent;
                const price = master.getElementsByTagName("price")[0].textContent;
                
                const card = document.createElement('div');
                card.className = 'team-card';
 card.innerHTML = `
                    <div class="team-card-photo"></div>
                    <h3 class="team-card-name">${name}</h3>
                    <p>мастер художественной татуировки</p>
                    <ul class="team-card-resume">
                        <li>работает в стиле ${style}</li>
                        <li>занимается своей профессией ${experience} лет</li>
                        <li>закончила художественную академию</li>
                        <li>цена от ${price} руб/час</li>
                    </ul>
                    <button onclick="selectMaster('${name}')" style="margin-top: 10px; padding: 8px; background: #000; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Записаться</button>
                `;
                teamCardsContainer.appendChild(card);
            }
            // Заполняем выпадающий список в форме
            const masterSelect = document.getElementById('master');
            masterSelect.innerHTML = '<option value="">Выберите...</option>';
            for (let i = 0; i < masters.length; i++) {
                const name = masters[i].getElementsByTagName("name")[0].textContent;
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                masterSelect.appendChild(option);
            }
        }