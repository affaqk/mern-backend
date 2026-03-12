import Product from "../models/productModel.js";
import ApiFeatures from "../utils/apiFeatures.js";

export const createProductController = async (req, res) => {
    try {
        // req.user.body = req.user.id
        // console.log(req.user.id);
        // console.log(req.body.user);
        req.body.user = req.user.id
        
        const { title, description, price, category, stocks, } = req.body;
        const product = await Product.create({
            title,
            description,
            price,
            category,
            stocks,
            images : [
                {
                    public_id: "123",
                    url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIASgBKAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABMEAABAwMCAwUFBQMJBgMJAAABAAIDBAUREiEGMUEHEyJRYRQycYGRI0JSodEVFrEzVGJygpOiwfBTY5KywuEkNNIIJTVDVYOjw/H/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAwIBBP/EACgRAQACAgICAQMDBQAAAAAAAAABAgMREiExQRMiMlEEYfAUM3GR0f/aAAwDAQACEQMRAD8A7iiIgIiICIiAiIgIiICIiAiK1V1EdJSzVM50xQxukefIAZKC6iidFxiauliqWW9zGStD2tfJ4gD54GMq9+9R/mX/AOX/ALLPOGuEpMijX71bZ9iP95/2Xn72N/mZ/vB+i5zg4WSZFGv3sZ/M3f3g/RefvYz+ZSf8YXecHCyTIo2OK2HlRS/8YVJ4rH8yfv5yD9E5wcLJMiiNw41bQUk1XNQu7qBhkk0yb6RuSNt9lK4pGSxtkjcHMe0OaR1BXYmJcmJjyrREXXBERAREQEREBERAREQEREBERAREQEREBERAREQEREBR3tEldFwRezGcPfSPiafV40j+KkSinac8jhR8bTvNWUkX1nYg08cAjjbG3YNaAAqjGP0V4k9UyMZPVeZ6VgxbKgw5WUSMbhUnGMhBjGIHmAV53QzsMeiyds/9158Buju1kMQM25j6K7pBOfqqhg+iG2DcaQVdtqqdw2mhkZjzy0hSXsyuBufAVkqXO1PFM2Jx/pMyw/8AKtYweIevorfYrLnhOqpds0dyqIceXiDv+pVxo5E+REVExERAREQEREBERAREQEREBERAREQEREBERAREQEREBQvtUrKekstvNVKyON1zpyS49GkuPx91TRce7VCLj2mcMWmrjLqPuHyYcPC5xLsjP/225+PqkkMun4ns1TPDBT1zZZJnhjAxjtyflss9tVHMZO4lZKGPLHljg4NcOYOOvoteeCbQ/Vqs9GdXV0QJ+vNZ9FZYbfAYqOnbE1zsu0/eOMZJ5k4UJ16eiN+1fenfPVVd4eR2VXsU5GzdvNeGjm/CfkstdPHHDQcq33irME420FUGnl/Ch0q1quN46kD1J2CtezSnfQfoqKmhFXSy0tXB3kEgw9uSD8QRuCgomvtppZ3Q1NzpGSsGXM70EtHmcHbZZHY49ndcSxxuDo/2s57XNOQQ5jMEfRaBnAljZGY22wtBdqJM0hJPxytX2bvksPa3VWSn79tFPC9vclxcNhqa459MjPqq016Rvv27wiIqJiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiFBGeO+M6Dgy3RVVc0yPnk7uGJpwXEDJPwG31C47W8fP4x4qscz7X3LaSoJimaSC0O5g885wPJb3tBo5OLOLnF3io6FpghaeWr77vrt/ZC1U9op6YUcFGI3VD62njDicNBMrRjPXmrfF9G5T5/Vp0IXfT0zjnnZUvvDgzIAGFEuLaqs4Wq6amuDGF9RG57BE7Iw0gHJ+aj8HFkk0umKP+0SAvHFL28Q9U2rHt0lt5eRqcMenNXo7qCwkux8RhQujrnTsDnuazbcj+OT+iyxX26Mfa1zDj8MucfJqtH6e/vpOc9PSUG7Zx6jBGN16y6kYHLO2P9fBRM8QWNm3tuceYkP8Akq28Q2x4+yrwPiHN/iF3+nn8w588fhMI7n4sSAHqcBVS3Rjdg3B65KhhvQ509TDNjpkO/gsOq4oEbTrptL/xMdz+SzP6fJHjt2M1JTl13GPEAAuV3/iiXhrtLqbvTQukf7M2NuqPIwcEnfp02K2Vv4gkuFfS0NMWmaqmETA52MOPntsrHFtgrKDi+mN5ZE8VVAQBFJq9x433A8x+a5irPPUu5LRx3Cc8CdrNFxNdYbTUQCnqpmnunbgOIGdOOhxnqeS6UDlfNj+Gn01TBc7TLpmgkbJE9vMOByP/AOL6EsNzZd7RS1zG6DKzL2ZzocNnN+RBCtkx8UaW22CIim2IiICIiAiIgIiICIiAiIgIiICIiAiIgIiIC13EFxba7PVVbnBpY3DCfxE4b+ZC2K5J288RGgp7baYHkSTPdUS4/C0aWj5kk/2VqleVohy06ho6++QxRGNjtMflnc/H9P4qJXHisQ1dNLCO9fT1EU4YdgSx4dg/8KidXcp6h+kOc5xKuQ08dOft2iao/wBjnws9Xkcz/RHz8l7OdPCMUnzLdcRcQ3ni+uFwu0kYZGCyPADIoWk50g9T9SsGKqZTfyDXzkffPgZ+p/JZNpst24jqdNvpZKoxkNMhAZDD6Z5D4DdX79aau0XAWqspi2tp24lMbfBK07se0+uSDn8I9VL5I3xhuab7lj95cKmrZTTVHcPc8R6WtxpJONzuVjRUjamZ0Uz5C/u3u8bid2tLsf4VmupqmolE072xvw0ZbufCAAfLOw6qsW6Nzi6R8jyTkkuxlccU2Lg+7cQ00lVabdFLCyYwl7pQ3x4Bxv6ELDuVkfa3TQ10bYauCo7mSNrtWPCHZyPiF2XsRwzg6fJHiuErgPLwtH+SgnHVuhrOLLxWOc6GOKb7XVIwOnOw+zBPQYyeWxUK5JnJNVrU1SJQ1zZ6eGCRlU8d60ua0uJwA4t5H1aVeNyrYCI6pgeCGu2Ok4IBB8uRBV6qtUzYYHNeXunBEVO57O8jbn7/AIvBzJ9N84Vuqa+K6vkuLWSMikaJjTuDmOAwMA8uQAVo68Jf5URVJfMyWhnfHUNcHNAJZI0+Y9fgtpW8Y3W41tFLepvaJKKJ0LZC3EhBIPi8zsrFBwdf73aJr1R0Alpu+LQxp0veeZLAebcnHP06LTyySsLoK+KQmM6DqaRLEfLf+BWq5Yme+9HDUOgWe/RPw+KUZOx8j6ELqHZ1eYZJpqD3TIO9Y0ctQwHY+WNvQr5qc6Wjc2WF+qNx8L28j+hUp4P4xfabtRVcriY4ZQZB10cnfkSqX43jUMRE1nb6pRUxua9jXsILXDII6hVLxLiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDwr5O7U77+3+OblPE7VDFJ7NBj8LNtvidR+a7t2u8ZHhXh4xUcmLnXZjp/wDdj70nyyAPUhfNUMZjDHR5dWTO0wt6jO2rPmTsPqqVrOuTm3rWmhLo2ge1cnv/ANl6N/peZ6LOiBtlRDK3RNE9uppx4ZWHIc0+vNpHMH5LDhfFDBPT1FOe9z4HDZ8bx0PmDvkc84I652Vuo+5xJKPtOg/B/wB1qI0zKY9lN5ksV5MFWdFDcXCMsdzjfnwOJ+en55OMKcdqVoFbbYrnAP8AxFJkPA+/F1+bTv8AAuXJiRpwVMKfjps1mnoLpIW1DafVDMWFwfI3YA4B94bEnkQvPmratovVbFNbRNbItrGMpr3WGydrgMFoJ30h2cKrXvzXqQTDsw4ggoLTVULnBj2R1NUdRAzgc/yx8lqa+uNxuMdZJMKmpnPeW4sdFooRqOXSavXJ32GR1xjK4dqRFZ6WkZaqeWspWumdNFLGZGt1kl5GDyDgN9hssWtMks8rWh8NPPoFW2OOBz52tGNyAN8tPIY57KFcfG82Vtk3WKrA195WdzVaanQ79pV7u501Q1e7Fnr9Omrortstsd5qaOiZC+G1SyyCmosxd4x2BmWTG+nl6nGBssGV8f2cL4XywRktt9C1sYMDtWzn6gNQ65366vXfWdstp4ikuN2k9rEUUklwqqdoJYWYJh0jcc2Zdy32OAtZLTFZ15cpETbt1ivrabh+xsMfdAQsbHTskcGBzzs0E8hnmfIZXzTdK2srZne1nXLNO+Z8gP8ALSOONWfIcgOm/qpnf+In8SCOtuWf2RC/DqWJzO8qHuGToBOcADGfjjJO2lr4TVthp64d7UywsZQxxuiaykj1H+UIxg8/qM78sYK8Y3PmWssxvUI7OBRVEkDHtnZs2Vv3XO64PocgO9FiVEIjAlidqhf7pPMH8J9VnPDbbPUwvZHPK0mOOUEOjB+84DqccvLOfJWmxvp2Ruqo3CmqQcebgNtQHx5Hrgqsx7hOH0z2OX39u8CUBkfqqKMeyzb5OWe6fm0tU3Xy72X8Vv4N4kb7RJ/7sqy2OpA5AH3ZB8M/QlfUDHBzA5pDgRkEHYhZvSaz27E7VIiLDoiIgIiICIiAiIgIiICIiAiIgIiICpe4NaXOOANyT0VSh3axeHWngms7l+morMUsRB38XvEeoYHFdiNzpyZ1G3BePL9+9nF1VXyvd7BGe7hx92FvUertz8XBYHCthn4x4kFMxroqc+OdzBnuYh0HryA+q1tc4wU3cjAM5BOwzpby/P8AgthZL7U2O5w1fDVRUUcrxieGTEkZA6f0gd+YBHQnmq5t/bX05SfcpdxV2dXiz1Tri2V94pWtAbMxmJYwNhrbzO33hn1xsou2UEbHK63w92oUFwY2C8RihqyMas/YyH0d90+h29Sop2jU9scTdLfLSlzpQyZrXhkgcc41M6jY+ILz0y2ieNoVnFFq8qyiHeLItlebfcIaxrO8MRJ0ZA1bEYyQcc/IrDpo5quQx0kMtRJpLtELC92BzOBvhUzMmgk7ueKSKTGdErCx2Pgd16nnSWs4rNXR1lMbcGip5O9oz3Z0tGfcBcfDnmBvy84/q9VY1IHoN9wtWR0dVcnyzMiDrXOyMvONUhLCB6k4KwmXepGA/RIzPulvTbPLzwR8ytfqymUG3irYK0sp6mIh8jmt8A1anEs5D8RPeHlzc0ZwMraPuFysEk0DJm3CFje7Ikc5xidgjwOzuA4PaAefdkjAAUct9bJb6ttVAGGZjXd2XDOhxBGoeozkeq3nA1jud+uBhoxijYcVM0mSxucberiByG+M5IBWZ1rt2N+liw01yvdwg/Z2au7tawRVXdsENJE1un7TIyHDbp0OnJU9u/CNh4Q4Oqn1+KirqGj2iaQ6XTHppbnA35NOfM9VIK6ssHZtYnFrAJiS7Q0AyTSeZxzP0DR5DnyG4XC7cXXCC7XB3eRumaKemifllMC7GuQ40t5Yy7GegwNvPNpt48LxWI8sVttqLrDDRwUVTPFJHILbR07Y9cJz78pB2Hx575xtndXPsovFPYKi619c2oubGhwpIgXgNA3Bd1IHIAY25qfWa78P8N0Ej5KyjDnOLp5KcZbI/mcEDMh+AUY4u7TLnPbWzWOIUFBLL3RqJNLql4HNzWZw0dMnn6LMZL3n6YatjrTy5dTaKmi7sgGaDdhP3oydx8jv8HHyX0F2I8TPu3DrrVVyF1XbMMa53N8J9w/LBb8h5r57lrIG17Z6SF0UbeYkfrfJnOou6ZIJGAMDb4qZ8Jyy2q6RVcEkjGuGlzmuLSWnkdvkV7YrzrxeWbcZfTKKLcFcQPuzZ6aoeHzQAOD+Rc07b/Aj8x85SvPaJrOpUidxsREXHRERAREQEREBERAREQEREBERAK5Z2yvNVUW6hB8ETXTPHqfC38g76rqa5b2gM76710vMxQhrfk3P8Sq4fu2xk+1wiuq5YLq+QwskZAe50VEepmNyWkHlvk9CqKUsknmnjhbCwnDY2uJDfMAnJ+qvUJvMEFRcLeKgUznObO+Mam+Z1t3235kYUl7OODZOKe+Hf9xT07Q55Ay5xcTgDy5c1ybRG7S7ETPUI/nzWXaa42y509dGwyOh1aWasbFpGM4OOfkunHshgB2rqr/D/wClW3dkkIzitqc/2f0U/wCoxflSMOT+SibOMpRXw1Xs80IZLqcIao7jABOCPE7A23HkuslvDnaLZoxLomkwdEjXYkjd10nmD5tPzHVcT4osU/Dt2dQTuDjoEjHD7zTkA/UEfJYlqudZaKwVdtmMU2wcObJAOjh1/iFq1OWr0Zi2vps3nGHBN04Xe6V4NVb8+GqY33PISN+6fXkeh6KMZXceDu0K38QRihuzRBWFuksfvrHXH4h6Yz5g81FOMuDrJNdnU3Ctyo2XNzS/9lGTAkH+6cdg7+gTjyISmXvjbyWx9bhzrKal5UxS0s8lPVRvhnicWyRyDS5hHQgrNt77dSTQzXaCapGNTaSF+l0x+4wnfAJ5kb49VS14r5cpjtfevTZ8N2KCuEdffK1lssveiI1MpwZn59yMdfV3Jq6txHxbY+A7JDSWqNjpjH/4eni2Ls9fMerj+Z5cuvNxko6uK439sE94bGBQWlgxT25nQubyyOjfmVGZZZqyqfWV85nqZDl0jj/rb0UdTkn9m+qR+6QR1YudcLvxNXtqamo2gooA492M8nHB7scxsHPOc7c1j09f+yZa+0OhjfRTue/cBz4w4APDRqxqIDfeO2MnfZagubjchZl6qNdNQ1zXsdLCW6Wv0nOP6Os+HPTQwb9eatxiI1CW5me3r2QCJktRTTOpZNYoYdMbpSdQ0mQk508tuu/TnkTsnnrqiKURSXh7XiaZzIu4ZFpAwN/ext+Q8zZ7up11boY3e2uY/wBuqHws7rSTu2M558/j6BUPji9kY11LUttHeExxdyzv5ZNPPnyz1HLkPTGnd7aZlRPLTC309NHjJLzFDqkkxvlx3O3kMBTTgxprLb4xnQcZ9OX8AFGn0969tqKOla+IysbLLDA4RtDcYGrBwPgSpF2Yhza2rp3YBDTkBwO4IHz67quOe2Lx0kHZ5fnW/tCpqGUkNnfJSuyeZ3LfzaPqu+rhFo4Pll48N+mlDaOlqY5WRtcNUjgxp89vF6b+nNdltl0FdNNEIS3uwDr1Ag56bHY/qFLNkrN9QpSkxTbZIiLDoiIgIiICIiAiIgIiICIiAiIgLlvGzTKbyAWgkPblxwBthdSXNeL4dU93iOBqD+fqzP8Amq4fuYyeHBaawyzWGW7RXG3ARtPeUpqNNRjOPcxuDz58l1jsBkYyC5xkgv0wO09cDX+q5AKajFNM6WtdHVRlwZB7OXB+P6edvmFMOzyjt1a+UVtXVU0zIgYTTTmIkZw7cb/hWM32TtvHubxEJvP2XXCaolldxJKO8e55Gl+2Tn8S2PDHZ9VWO+U1ylv0lSyDVmEteNeWlvV2OueXRRmbhqpdM90HFlfHEXHQ11RKSB0ydazLFaZrVdqeuquJKisZCXEQySSOBJaW9XEdfJeWcn0/dH+npjDO/tlqO2hwfxfFjpQR/wDPIoEpX2k3CK48TulhfrEVLHE8jo4F5x9HBRMr14f7cPLl++XhwcHJyDkEHBB8wVuY7pT3VrKXiIO70YEF0hbmWM9BIB749Rv/ABWkKkXA9wt9DcKn2pgZcZYC221bwHsppvxFp25cj0x6ruSI1uTHM71CW38nh+xWtvFdBT3i86ZHQVlTkGONpAY07Zk88OWj4go5OE2Q3GKmqJ7hW7R11REO6pnY8WNt3kk8+XTqtVFxXJQzQgON2qInkvnrCXBoySRHnOkknJPTYeZW8tPEdtoGXW6vrZ7jRVzCyeyVrwXGc+6TnOpoxzGDjrtheOK23yt4e/Jalcfx08x5/n7eEJE5M75J2Nmmd4pHTMy7V8evxW+NHSx2iGsmYxs08L5YY2U4c0hrtPid0OQdsHpkjK00gpZGACuZG0fcZSOx9S7JVwVLm0rqVl7nFO45dEIHaCfhqwvXetpj6XlwZMVZn5I22sNthfcWUXeQjW+mY2T2BuPt2awff6cvX0V6ksLKmvqaUTU7e5ihlD/Ymu1d43OMB++P6Jdq6eS0XeuxEBfKkCE5iAjf9mf6Pi2+S9rG1FNQMqTeJnRyY0RgkOOHEjw684zkg4xk+ZVOkGxgp4n0NumdJG11Y9re5ZStPdfaOjz74JGW88DmAtnYLPFX8R2u31E0bqetbK5lRTxAeBo8JaTnqMEEDBBCjLXXGSSWAVdwc6AGSRhccMwc59/Gc7+eV7b6yutj47xQ1dTA6KRzWVHdNcQ4jxYa4nPqcLNu46djz26Hxb2U0EdNJVUdbIJg3lPLFGw489gor2UxZuNRKD7jQ346g4/9Cs3Piu/VDzR8QXWpdTyQh+k0kTnb8tmubjb1+SzuzVjY62pfG/MfiDctwSARg43xseWSs4a3ifqay2rMdQ6bTttQdIa2Cllk1DeWjMrgMDrj8lveEaukddKmkoomRxiFsv2VM6JuScHYjGdhyUfst2lE1fDBT1cghmaxxiMeAe7a777x+LoFJuGaw1F2qWSxTxzCFrsSlpOnJx7riBvn6Ly2380/5Xj+1CUoiK6AiIgIiICIiAiIgIiICIiAiIgKBcasEN2Lj7s8IO/UjIP5AKeqGdp1OW2iC4NH/lpdLz5Mft/zBv1VMU6szeOnzpdIaOiutbDVwVMxDyY3Q1DYgM77gsdn6jksSilc2MYJaWnYtJBHwW+4ndEyshuAp4qnOY5I5tWjPNp8JB8+vRRxs3eTvl7tkbZCSGxghg9BnP8AFUmNTpiJ622Qrqn+cVH9879VV7bUEbzzf3rv1WRw7w7duI6jubTSmRrTh87/AAxR/F3+QyfRSziDs/HC9vguFTLJc42am1jIW6BHqBDXN88HGc89uW6lM44nSkfJMbQXOV4VvqirsBpp20tMWOLXhgkicX6i0aSHh+AAeYwVoSqpqSF5I/2eHU3+WlBDD+FvU/Pl9VWwN8T5M92wZd+nzWM5zppXSyczyHkFme+lafRHP36/6txxhjcBVbZB6hVFULST3KZVKZQZ/wCyq91NTVDaWQ09S7RFM0aml2cYONwfQ4JV69vbJU01uZIWwwtBkDdTtOwGcZGT/YYd9wdismzTy2WjmrnSFomYB3GfDK07jU0ggg4OMtc04cMtdhbKyUcrLc+4yMZNW3SYMigEbS0592I6s+E5DiBghrBv0GLS1EI69sJpmd5G5tAC802IftJnEj3znly/gFfDZxXZ7mM3TpD3P2UbA3nzxnGPhn6TTiLsyu9ujNws7oLmZGHvoyzS+LIGSxucHr68gB1UElibDFLEWubSskw+V8JbKZAPd3Owz9Ovrmlot4atEx5YjHUTJpRUQz1DdtBilEJB65Ba7r8FMuCtNLRh+TqkGT4cAbn19AohA+R0f7OdRU/eueAJHxETMJ9cj8wVvBcI4BKKYkRt2ZqIOwGAdvhlejHG5RvPpPeHJu8vdNLG0OfNOGFp5PYXcj57HbyK7TTU0FM0iCJrAdzgc1w/shJuvFMWkfZUcTpnn5aWj6nPyXdlLPEc1MczoREUWxERAREQEREBERAREQEREBERAWHd6CO6WuqoJ/5OoidGSOYyOY9RzWYiD5ProporlVWW4ta2bvDTHJwGSg+F3wz59HFXuH6Wa+cQGLiCqy2kDnPFZP3ccQaQCMfHA0t5lTrt84UMUzOJ6OP7KTTDXADk7kx/z90/Bq5rNOy7CG4P8NRDoZXvxnIyGtmwN+WA7HM/1lfJE5KbhnHqk9u2S8ZcO8NW1kYmDgxuIqeCMBz/AOqz7o9Thc24s7RLvxEx9LGRQ252xgiOXSD+m/r8BgfFQyrkpmVr/ZJJnwnGXztDXOPnjJwPIZPxXucjIUceCte57lvJlm09LgcgOXNaPeccAeZVslb2xx3Kitst3gts9VRmQRvMew233OCccunToq2txhileUtJPI17xTxvBaw+LB953+tl5jAwtnc72LjQw0/sndujfq197kHYjAaGgAcvPktYuxGi9uU7XIaeWo7zuYy/u43Svx91jeZ+AVghbOw1NNBNWe1SaGTUM0IPm5wwANlW0WqPPdxVFS4ZIGCQd3YzgDA8Lfk/0XWWJZWUz7pCyuhkmpnHTIIidTAQRqGOZbzx1xhZktris08n7TkilfG4tjY3xCTGMH1BBYcbeGQOBy0hUTV7qdn/AIWBlKzOGPd4nkjGDgdfBEdz7wJ+8VIqG3WymlpTP315rquEd3HjL2Nxs1sedhzGTgNxtvsMzLsQidTPPWVbHSMOtz8w07muIfnmSRgZOBqIxk788rItlbV26obNbZe7qIXiSWbunFtK7ODoB2O2x23+CprKGSgq6mjlY+Hun6ah8ge59P5NB67devPkrBDO7YXju4gPsQ1r81Jz97/XwXNbd8OwcO9qtLUsay/w+zte9zIq9jC2GbHVzebDuN9x6hY/aFb7RxBSPqYJ6X2xkZe0vlEbpGgE+F/uv+BXJ6if2dznyCP2l2ppgLXaYM8i3fmq6aMVtNFSUsk5qHuJmZNuxoGS6QOzywNwRn1PJRtg73WdLUzaiYtC7DNWG3G51k0tRHGXUtI6Z5JDyMnG+fC3fyyQs/hXgi/cYNLrTCyOkjfpfVTv0sB/COZJ36D6LAndLxHd7fZrFA7uGYp6ON3Mk7vkd6uOXE42AA6L6l4XslNw7YaO1Um8dOzBd1e47ucfiSSvTN+FOvMocdztouzfgWLgqhqGuqvbKyqc0zTd3oADeTQMnYZPxypkiKEzMzuWxERcBERAREQEREBERAREQEREBERAREQYl2oILrbKq31bA+CpidG8EdCML47qWVdivNRTSAd9SSvhka4eF+CQQR1B/wA19nlfNvbrYTQ8avrIW6YrjC2bb8Y8Lv4NPzW6RMzxhyekQlkZDQSzW9kToKjwySSR6pafIOYsnYA89QAJxjPMLHqaae3mJtVpa+Vgf3Qdl8YPLUPukjfHPGFhUNVPbqjvI2tcCNL45BlkjfwuHULb0VNRzzNrKeF9RBFmSeg7zEg8sHm5mcZI8QGfiqRtnT2w2ye+3elttIPHO/BceTGfecfgP0X0Jcqq2cE8ImRsY9no4tMMR5yyHYZ9Sdz6LkHZdXUVDcq2uq3QwtbE6V7gQBoBGIo/UuI28h6LH7ReL5OIq6Gma7FJTDWGj78h5n4AbD5+a8t95MnH1D0ViKY9ovPUSVNRLUTae8le579IwMk5OB0G6o1K3lMr1vK6FwJQV9y4baaG1R1TWVBiM8j4gWPBDtssydiOeR8tloeKonQ3qaCsiMEkGmMQl2e/eOee7Ab16ALp/YW4N4Jmz/8AUJXf4GLnPHrx++l4LX94TUHU4ucPZxtuP19VCl5nJNVrV1WJaPLg92GB85Ds0+XhtMPMf9uXRT7sdutHR3iots7WyNrSO4rnNOp0zRksyd8Ecv6vqufeDQR3uiMas1GtwNQfL/XJXBO6CVlQB3ckbg6KlbI4aCOT/jndUvTlXTFbanbqnbFw2ZTDxDRRukfHhlVTtziUbBryB5e6fTHQLkskohBdkSSvGC3U4dwc8m/62XXqDjWnv9kdTVc9PHWvgO7naY3SBuXNyeQcNx5Fcro6T2ttXTR0rXYIkZVSy6fZx17xx20kdOeQMdQY/p7Tqaz6VzViNWj2tQw19BW0z4Wx1bqqP7PYTMnafeaQeoOxGxGM7bFY1zqIqKJ1BRPY98n/AJqVnLOf5Nh3y0eefF8Avau4wUUUtJaSXulGJq1zcOePws6tb59T1wNlrYKZ8h2HzV9TadQl1Hl2H/2c7E2WtuN9mYD3DRTQHyc7xP8Ay0j5ld3woj2U2T9hcC2yne3TNMz2ibIwdT/Fg/AaR8lL1KfLQiIuAiIgIiICIiAiIgIiICIiAiIgIiICIiAoJ2uWRlzsdPVOZqdSTbnGfA/Y/wCLQp2sa5Ura2gqKYnHesLQ78J6H5HBWqzqduTG40+Wrjw44AmMbKPyUk9FMHtL2OYchzSQW/NdjcyCqc9ulsVQwlskZ5agcH4HK1FzskFS1sUzCGumiZIOTg1z2g4+RO693Lp56zO0J/adPcw43enxVkYFdSgNc4/72P3X/EaXeZK9raCtnoIIaBsNZTwudK59LkyOc7G72HxDDWtAAGBvvuVKO0vs8Zwa6lqrdWvqKSqmMTIZm+OM4J94bEYHkFGLdcKeme0VjXwEH3i3IypapfuJUnlDV1scLaiGChMkj+6jEhd4cykeIAHBABOnfyz1V11tlde3WmneyaYVBp2PHha5wOM+gXRqAW69RgSyU1dv/wDMLZXD65IWQOB7R3olgjkp5Ach8Mr2lp9PFgfRZ4S5yhidk1+jorHV0JcNUcVRV4z0DWqHX2pkutxulygGmFkrXTESEd5rOAceW2FPIuz2yNiDHGuJBzllQ1o+hYVW7gS0DvA0VJjeACySocQQDkZ06c7qNME1vNvytbNFqxVzJ0b3ULawSNEbagxdyCfszpDmkeh8Xw0+qyW26e5xU8tuhqJXGM+0vdkNZIHnfWcAAt0nnsc+i6PHw5abe3VBQ0zC3fXIzvCPm/UfzUd4hu9DtDJXCd7T4YmOMhafQDOFeK/lHl+GoqZKCGrkqrtK2smlw6SltztDHPxgl8pG2SCXBgO7jghaa73isurIqUtip6OEnuaOmZoiYfPHNx295xJ9VfmpKmocJGwGCJ7w0Ol57+i6DxR2b2/hWnsZZUTVdbUVbmTTP8LcCJxw1o5DI65Pqu7pWdeZdjl7c3t1jlqHg6Dg9SFOOGuE46iuo6R7Mmolax3np5u/why21BQRBuoYZGPvnr8PP+CnHAVNFUXGaohZ9lSx6A7nqkdzOfMNH+NbvbjWdMV3ae07Y0NaA0AADAA6KpEXhegREQEREBERAREQEREBERAREQEREBERAREQF4eS9RBwHtSM3DnG8z4wRT1zBUs8tXJ4+oz/AGlqv3ohdSCWdveGB7JQB73hc0kD44XV+1jgZ/GVBROpHBlZRyOLSTjUxw8QHTOQ07+R81xa/dnHEFkoaiqmjqDBCwvf9nqAaOZJBIC9Fcn06lKad7dE47rX8b2m1upKcQRxyCpDnv1ag5hGNhtzUHfwdcXyAh0RA3wQd10bh23n93baws5UsY/w7rY/s2XT4mB3U5GF4OdtvZFK6cuk4JjkeHPogwgZDmSFn0wsWW33S2yaYam/xN6Bk4c0fJddFFKMt0HBBweqsutshfsCfTC78loc+OsuVtuF7G37VvP9yxVd/c6jwz3DiF2f9k5sf+S6j+zpBjMeSnsMg37sfwXflv8Ak+Orm37utrWZnoa+d3Q1tW52PjgqqPhasp2DuaeGHP4BjP5LpIo5s+4dkFHM5xyDj1CzN7NRSsOefu5XTNawujB1NJPPl0W97TeLo66os1LLQPh7qqdLqc8Oa4CNwI5f0h+alPsTx90/BQjtEsVXdq6z0VCHNnlmkDS1mojwZJwP6q3ivPKNsZKxxlHK7iY4OHbAfRd17OLdLbuEqL2lumpqW+0zAjBBfuAfUN0j5Ll3D/YvWSV1NPeah7oGStfIw4bqaDnGNzvy6Lu4GAABj0Xqy5OXTzUprt6iIoqCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKEdsl4/Y/ANxPdd46sb7I0E4DdYIJ+QB/JTdQ/tYsI4g4Jr4A/RJTN9rjJGQTGCSPmMj5oNdw7Wt/YNtwPF7JEc+fhC2HtjTjLRzyuWcMz8Zw2Shkgoo6mlMLfZm9212W/d1EOBHTmpbw/JxMaiZvENNb4otOpns7jra/bbmcjGeahML1lJ/a3ciNl46pJHhAWM09M4yvd29VxpkMqSOY5+Sq9qaPksTO/nsg3RxlOqxleCq1YyM9OSxSDnmcfxVTNQJ0gF2PDnln1QXzXMacObhRfi+/m0X3hmvjjEjG1bmSNHMteAw/PDitBd7Hx3M+OpfdGSSOdh0EGhugdDvgY/Plz5rFi4cv964hs1rv9RqY+VzxqDC0NYMuI0884A8Xn0wt1jti09PoNEHJFVIREQEREBERAREQEREBERAREQEREBERAREQEREBERAWJd4u/tVbD/tKeRv1aQstUvaHsc08iMIOW9n0mvgu0Hypw3HwJW9fnOcKMdnUjY+FoYHkB0FRPDgjyeeX1Ul1Z5b4Xnt5eivgw0+iqwrYLgNlWCc+6VxrQG77c8ZyqQ3Bwrm/VDv6BHHmnIXmkA5C92+C9JxjA39UHhJPX8lhW8a+0K0NPOOiqZPzjb/ANSztuQ2Px5K1ZIdXaBHJ/srTJ/ilZ/6St08sX8J2iIrIiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDknCTRCL3SuBPcXiqbjyBdkfxC3jXOBJGQOg57LVW9gpuKOLIcH/AOItkx/XjY5bIyZOeS89/ueinhdEmANm4PPZBMzPPf0Csd6D6p3jW+TRz26rO29MsS43x8kc7fYD5LG7wZxuve8bjBzy68k2Lwk078h122XuS7I149MrGMmfdO/wXrJdyMn6IMsOcOe/qCvOFD3vHF1cTnurbTM+BdJMf8gqC53QBZHArGvvnEE43I9mhJ/qsc7/APYqY/KWTwmaIisiIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIOX3w+x8fXgH3KmlpZxt1+0Yf+UKg1IzzUn4q4VqLveaa40dRFEWUzoJWyA+Iag5pGPLxf8S1p4HuPSrpv8X6KF6zM7hal4iO2q9oHR6GcY9Ftf3IuXSrpvq79F5+5Nz/ndL9Xfos8LN86tV7QzbV/FVe0tHJ23xC2P7j3PpV03/E79FUOCrp/O6X5l36Jwsc6tV7W3JwRlVioODglbH9ybpjHtVH/AIv0Xv7k3TrV0n1f+icLHOrX+0uP3gt/2cRO7m9VLh/L3E6T5hkUTP4tcsNvBdyHOrpcf2v0UrsFvfa7VDSSvbJK3Jke0YDnEknHpvhUx1mJ7TyWiY6bFERVSEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z"
                }
            ]
        })
        // const product = await Product.create(req.body);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product Not created"
            })
        }
        return res.status(201).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }
}

export const getProductsController = async (req, res) => {
    try {
        const apiFunctionality = new ApiFeatures(Product.find(),req.query).search().filter().pagination()
        const products = await apiFunctionality.query;
        if (!products) {
            return res.status(400).json({
                success: false,
                message: "products not found"
            })
        }

        let totalCount = products.length
        return res.status(200).json({
            success: true,
            products,
            totalCount
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}

export const updateProductController = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            })
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        return res.status(200).json({
            success: true,
            product
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })

    }
}


export const deleteProductController = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            })
        }

        product = await Product.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}

export const productDetailsController = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product Not Found"
            })
        }

        return res.status(200).json({
            success: true,
            product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}

