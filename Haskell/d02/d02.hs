module D02 where
import Data.List.Split



d02 :: IO ()
d02 = do
    input <- readFile "2"
    print (splitOn "\n" input)


-- module D02 where

-- d02 = do
--     input <- readFile "2"
--     print (lines (read input))