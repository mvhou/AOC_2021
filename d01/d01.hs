module D01 where
import Data.List.Split

d01 :: Int -> IO ()
d01 part = do
    input <- readFile "1"
    print $ getAnswer (map (read::String->Int) (splitOn "\n" input)) part

part1 = 1::Int
part2 = 3::Int

getAnswer :: [Int] -> Int -> Int
getAnswer xs part = length . filter (\x -> fst x < snd x) . zip xs $ drop part xs