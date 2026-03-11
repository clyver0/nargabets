# Método de Apostas por Níveis

Este método utiliza **níveis de banca**. Você começa com um valor inicial apostando no primeiro nível. Conforme a banca cresce, ao atingir um valor equivalente a **quatro apostas do próximo nível**, você avança de nível e **o valor da aposta dobra**.

Cada nível possui **4 vidas**. Se ocorrerem **4 perdas**, você **retorna ao nível anterior** e volta a apostar o valor correspondente a esse nível.

Na prática, você sempre aposta buscando alcançar a **margem necessária para subir ao próximo nível**, tendo **4 tentativas antes de cair de nível**.
---

# Regras

- Banca inicial: **20**
- Aposta inicial: **5**
- Cada nível tem **4 vidas**
- Perdeu 4 vezes → desce um nível
- No nível 1, perdeu 4 vezes → **perdeu tudo**

---

# Progressão dos níveis

| Nível | Banca | Aposta |
|------|------|------|
| 1 | 20–59 | 5 |
| 2 | 60–119 | 10 |
| 3 | 120–239 | 20 |
| 4 | 240–479 | 40 |
| 5 | 480–959 | 80 |
| 6 | 960–1919 | 160 |


- Quando a banca chega no próximo intervalo → **sobe nível**
- A aposta **sempre dobra**

---

# Exemplo

Começando com **20**:

1. Apostar **5** até chegar em **60**
2. Ao chegar em **60**, apostar **10**
3. Ao chegar em **120**, apostar **20**
4. E assim por diante.

Se perder **4 apostas seguidas**, volta para o nível anterior.
