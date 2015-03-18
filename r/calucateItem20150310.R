item1703 <- read.csv("item2015031712h.csv")
item1703[item1703$item==642,]$num <- item1703[item1703$item==642,]$num -1
itemlog <- read.csv("itemlog_after20150310_before_20150317.csv")
itemlog <- itemlog[c("item_raw.item_id","item_raw.user_got_amount","item_raw.user_lost_amount")]
names(itemlog) <- c("id","got","lost")
itemgotlost <- aggregate(itemlog[,c("got","lost")], by=list(itemlog$id), sum)
names(itemgotlost) <- c("id","got","lost")
item1003 <-item1703

apply(itemgotlost,1,FUN = function(row){
  item = row[0]
  item1003[item1003$item==item,]$num <- item1003[item1003$item==item,]$num - row[2] + row[1]
})

item1003