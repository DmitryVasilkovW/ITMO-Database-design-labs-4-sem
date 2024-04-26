set scriptPath to "/Users/dmitryvasilkov/IdeaProjects/ITMO-Database-design-labs-4-sem/Labs/Lab6/src/ts/DBChecker.ts"
set command to "ts-node " & scriptPath
set theOutput to do shell script command
set theLines to paragraphs of theOutput

tell application "System Events"
  activate
  set theDialog to display dialog "Нажмите 'Вывести все и завершить' для вывода всего содержимого или 'OK' для построчного вывода." buttons {"OK", "Вывести все и завершить"} default button 1 with title "Результаты проверки базы данных" giving up after 60
end tell

if button returned of theDialog is "Вывести все и завершить" then
  tell application "System Events"
    activate
    display dialog theOutput buttons {"OK"} default button 1 with title "Результаты проверки базы данных" giving up after 60
  end tell
else
  repeat with theLine in theLines
    if theLine is not equal to "" then
      tell application "System Events"
        activate
        set theDialog to display dialog theLine buttons {"OK", "Вывести все и завершить"} default button 1 with title "Результаты проверки базы данных" giving up after 60
        if button returned of theDialog is "Вывести все и завершить" then
          tell application "System Events"
            activate
            display dialog theOutput buttons {"OK"} default button 1 with title "Результаты проверки базы данных" giving up after 60
          end tell
          exit repeat
        end if
      end tell
    end if
  end repeat
end if