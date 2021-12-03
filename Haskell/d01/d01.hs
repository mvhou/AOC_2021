module D01 where
import Data.List.Split



d01 :: IO ()
d01 = do
    input <- readFile "1"
    print $ getAnswer (map (read::String->Int) (splitOn "\n" input)) 1
    print $ getAnswer (map (read::String->Int) (splitOn "\n" input)) 3

getAnswer :: [Int] -> Int -> Int
getAnswer xs part = length . filter (\x -> fst x < snd x) . zip xs $ drop part xs